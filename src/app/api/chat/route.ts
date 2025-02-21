import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    console.log('Attempting to connect to Ollama...');
    
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistral',
        prompt: message,
        stream: false
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Ollama response not OK:', response.status, errorText);
      throw new Error(`Ollama response failed: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    
    if (!data.response) {
      console.error('Unexpected response format:', data);
      throw new Error('Invalid response format from Ollama');
    }
    
    return NextResponse.json({ response: data.response });
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to process request' },
      { status: 500 }
    );
  }
}