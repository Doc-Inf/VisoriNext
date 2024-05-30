import { getClientVideos } from "@/constants/functions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { query } = await req.json();
    console.log(query);

    const res = await fetch(
      `https://www.itisvallauri.net/visori360/php/datiHome.php?${query}`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );
    const data = await res.json();

    if (!res.ok) throw new Error("Failed to fetch videos");

    return new NextResponse(JSON.stringify(data), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), { status: 500 });
  }
}
