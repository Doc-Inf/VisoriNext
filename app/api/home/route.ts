import { getClientVideos } from "@/constants/functions";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://www.itisvallauri.net/visori360/php/datiHome.php",
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );

    const data = await res.json();

    const videos = getClientVideos(data);

    return new NextResponse(JSON.stringify(videos), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
  }
}
