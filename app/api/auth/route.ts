"use server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const body = new FormData();
    body.append("email", email);
    body.append("password", password);
    const res = await fetch(
      `https://www.itisvallauri.net/visori360/php/auth.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${email}&password=${password}`,
      }
    );

    if (!res.ok)
      return new NextResponse(
        "Impossibile effettuare il login, riprova più tardi",
        { status: 400 }
      );

    const {
      nome,
      cognome,
      email: emailWS,
      sessionID,
      access,
    } = await res.json();

    if (access !== "granted")
      return new NextResponse(JSON.stringify("Credenziali non valide"), {
        status: 403,
      });

    return new NextResponse(
      JSON.stringify({
        nome,
        cognome,
        email: emailWS,
        sessionID,
        access,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
  }
}
