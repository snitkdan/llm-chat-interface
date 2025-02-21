# AI Chat Interface

A real-time chat interface built with Next.js that connects to an AI model through a streaming API.

## Features

- Real-time streaming responses
- Mobile-friendly interface
- Clean, modern UI with Tailwind CSS
- TypeScript support
- Animated message bubbles using Framer Motion

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (18 or newer)
- npm or yarn
- An API endpoint for AI responses

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <your-repo-name>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
# Add any required environment variables here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts    # API endpoint for chat
│   │   ├── components/
│   │   │   ├── ChatInterface.tsx
│   │   │   ├── MessageBubble.tsx
│   │   │   └── LoadingDots.tsx
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
```

## Deployment

The easiest way to deploy this application is using [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

## Built With

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Framer Motion](https://www.framer.com/motion/) - For animations
- [TypeScript](https://www.typescriptlang.org/) - For type safety

## License

This project is licensed under the MIT License - see the LICENSE file for details
