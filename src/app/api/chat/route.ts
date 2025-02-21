import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistral',
        prompt: message,
        stream: true
      }),
    });

    const stream = new TransformStream({
      async transform(chunk, controller) {
        const text = new TextDecoder().decode(chunk);
        const lines = text.split('\n').filter(line => line.trim());
        
        for (const line of lines) {
          try {
            const json = JSON.parse(line);
            // Only send the response part of each chunk
            if (json.response) {
              // Send just the new text chunk
              controller.enqueue(json.response);
            }
            // If done, close the stream
            if (json.done) {
              controller.terminate();
            }
          } catch (e) {
            console.error('Error parsing JSON:', e);
          }
        }
      }
    });

    // Pipe the response through our transform stream
    const readable = response.body?.pipeThrough(stream);
    if (!readable) throw new Error('No response body');

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to process request' },
      { status: 500 }
    );
  }
}