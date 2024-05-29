import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { title, desc, author, duration, lang, url, img, subject, topic } =
      await req.json();
    const body = new URLSearchParams();
    body.append("titolo", title);
    body.append("descrizione", desc);
    body.append("autore", author);
    body.append("durata", duration);
    body.append("lingua", lang);
    body.append("image", img);
    body.append("link", url);
    body.append("materia", subject);
    body.append("argomento", topic);

    console.log(body.toString());
    const res = await fetch(
      "https://www.itisvallauri.net/visori360/php/createVideo.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      }
    );

    const data = await res.text();

    console.log(data);
    if (res.status === 403)
      return new NextResponse("Forbidden", { status: 403 });
    if (!res.ok)
      return new NextResponse(JSON.stringify(data), {
        status: 400,
      });

    return new NextResponse("Video creato", { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
