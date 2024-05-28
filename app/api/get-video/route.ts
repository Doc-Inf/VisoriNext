import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${url}&key=${process.env.YT_API_KEY}`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );
    const data = await res.json();
    return new NextResponse(JSON.stringify(data), {
      status: 200,
    });
  } catch (e) {
    console.log(e);
    return new NextResponse("Error", { status: 500 });
  }
}
