import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
app/api/chat/route.js
export async function POST(req) {
  try {
    const body = await req.json();

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are MindVision AI, a smart AI business assistant helping businesses and individuals with marketing, growth, productivity, publishing, and problem solving.'
        },
        {
          role: 'user',
          content: body.message
        }
      ]
    });

    return Response.json({
      reply: completion.choices[0].message.content
    });
  } catch (error) {
    return Response.json({
      reply: 'Error connecting to AI.'
    });
  }
}
