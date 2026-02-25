/**
 * Chat API Route - Mock Response Version
 * 
 * To switch back to Gemini:
 * 1. Import { GoogleGenerativeAI } from '@google/generative-ai'
 * 2. Restore the Gemini implementation (see README or previous git commits)
 */

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
   try {
      const { messages } = await req.json();
      const lastUserMessage = messages[messages.length - 1].content.toLowerCase();

      // Professional Mock Responses based on Gautham Chadalavada's Resume
      let responseText = "I'm Gautham's AI Assistant. I can tell you about his experience in Java, Python, and React, or his work at Zoho and FSU. What would you like to know?";

      if (lastUserMessage.includes('skill')) {
         responseText = "Gautham is highly skilled in Java, Python, TypeScript, and SQL. He also works with frameworks like React, Next.js, and Spring Boot.";
      } else if (lastUserMessage.includes('zoho')) {
         responseText = "At Zoho, Gautham was a Member of Technical Staff. He improved system throughput by 25% and migrated complex Oracle databases to MySQL.";
      } else if (lastUserMessage.includes('experience') || lastUserMessage.includes('work')) {
         responseText = "Gautham has over 5 years of experience. He is currently a Software Engineer at the Agency for Healthcare Administration (IT). Previously, he worked at Zoho and as a Research Assistant at FSU.";
      } else if (lastUserMessage.includes('project')) {
         responseText = "Gautham has worked on several impressive projects, including a SIMD-Accelerated JSON Indexing Engine and a real-time HackerNews Web App. He also built an AI-powered GitHub Reply Assistant.";
      }

      const encoder = new TextEncoder();
      const stream = new ReadableStream({
         async start(controller) {
            // Vercel AI SDK Data Stream Protocol Format (v1)
            const words = responseText.split(' ');
            for (const word of words) {
               const chunk = `0:${JSON.stringify(word + ' ')}\n`;
               controller.enqueue(encoder.encode(chunk));
               await new Promise(r => setTimeout(r, 50)); // Simulated typing speed
            }
            controller.close();
         },
      });

      return new Response(stream, {
         headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'x-vercel-ai-data-stream': 'v1',
            'Cache-Control': 'no-cache'
         },
      });
   } catch (error: any) {
      console.error('Chat API Error:', error);
      return new Response(JSON.stringify({ error: error.message }), {
         status: 500,
         headers: { 'Content-Type': 'application/json' }
      });
   }
}
