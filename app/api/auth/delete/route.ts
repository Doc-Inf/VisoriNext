import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, surname } = await req.json();

    const body = new URLSearchParams();
    body.append("nome", name);
    body.append("cognome", surname);
    const res = await fetch(
      "https://www.itisvallauri.net/visori360/php/deleteUser.php",
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
    if (error === "user not found" || error === "missing id")
      return new NextResponse("Utente non trovato", { status: 404 });

    if (error === "effettuare prima il login")
      return new NextResponse("Effettua il login", { status: 403 });

    if (result === "success")
      return new NextResponse("Utente eliminato", { status: 200 });

    return new NextResponse("Errore nella risposta", { status: 500 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Errore nella risposta", { status: 500 });
  }
}
