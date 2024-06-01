import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { title, author } = await req.json();

    const body = new URLSearchParams();
    body.append("titolo", title);
    body.append("autore", author);
    const res = await fetch(
      "https://www.itisvallauri.net/visori360/php/deleteVideo.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      }
    );
    if (!res.ok)
      return new NextResponse("Errore nella risposta", { status: 500 });

    const { result, error } = await res.json();
    if (error === "Video not found" || error === "missing id")
      return new NextResponse("Video non trovato", { status: 404 });

    if (error === "effettuare prima il login")
      return new NextResponse("Effettua il login", { status: 403 });

    if (result === "success")
      return new NextResponse("Video eliminato", { status: 200 });

    return new NextResponse("Errore nella risposta", { status: 500 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}
