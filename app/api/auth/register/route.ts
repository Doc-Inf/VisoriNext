"use server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, surname, email, password } = await req.json();

    const body = new URLSearchParams();
    body.append("nome", name);
    body.append("cognome", surname);
    body.append("email", email);
    body.append("password", password);

    const res = await fetch(
      `https://www.itisvallauri.net/visori360/php/createUser.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      }
    );

    if (!res.ok)
      return new NextResponse(
        "Impossibile creare l'utente, riprova più tardi",
        { status: 400 }
      );

    const { result, error } = await res.json();

    if (result === "failure") {
      if (error === "effettuare il login prima")
        return new NextResponse(error, { status: 403 });

      return new NextResponse(error, { status: 400 });
    }

    if (result === "success")
      return new NextResponse(JSON.stringify({ result, error }), {
        status: 200,
      });

    return new NextResponse(JSON.stringify({ result, error }), { status: 400 });
  } catch (err) {
    console.log(err);
  }
}
