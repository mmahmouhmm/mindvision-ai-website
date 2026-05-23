import OpenAI from 'openai';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message) {
      return Response.json({ reply: 'Please enter a question first.' });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are MindVision AI, a smart AI business assistant. Help businesses and individuals with marketing, sales, ads, websites, KDP publishing, resumes, documents, productivity, and business growth. Give practical, clear, step-by-step answers.',
        },
        {
          role: 'user',
          content: message,
        },
      ],
    });

    return Response.json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    return Response.json({
      reply: 'Error connecting to AI. Please check the API key and redeploy.',
    });
  }
}
