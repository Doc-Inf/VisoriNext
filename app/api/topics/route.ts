import { getClientVideos } from "@/constants/functions";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://www.itisvallauri.net/visori360/php/datiHome.php?getArgomenti",
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
