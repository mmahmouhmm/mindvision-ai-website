export async function POST(req) {
  const body = await req.json();

  console.log("New MindVision AI request:", body);

  return Response.json({
    success: true,
    message:
      "Thank you. Your request was received. MindVision AI will review it and contact you soon.",
  });
}
