import { deleteCookie, getCookie, setCookie } from "cookies-next";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  if (isAuthenticated()) return new Error("Sei già loggato");

  const res = await fetch("api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok && res.status !== 403)
    return new Error("Impossibile effettuare il login, riprova più tardi");

  const { sessionID, access } = await res.json();
  if (access !== "granted") return new Error("Credenziali non valide");

  // create token
  // expires in 10 days
  const expires = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);

  setCookie("PHPSESSID", sessionID, { expires });
  return sessionID;
}

export async function register({
  name,
  surname,
  email,
  password,
}: {
  name: string;
  surname: string;
  email: string;
  password: string;
}) {
  if (!isAuthenticated())
    return new Error("Impossibile creare un utente senza essere loggato");

  const res = await fetch("api/auth/register ", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, surname, email, password }),
  });

  if (res.status === 403)
    return new Error("Devi essere loggato per creare un utente");
  if (!res.ok)
    return new Error("Impossibile creare un nuovo utente, riprova più tardi");

  const data = await res.json();

  return data;
}

export function logout() {
  return deleteCookie("PHPSESSID");
}

export function isAuthenticated() {
  return !!getCookie("PHPSESSID");
}
