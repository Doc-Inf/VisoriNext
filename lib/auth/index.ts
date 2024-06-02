import { deleteCookie, getCookie, setCookie } from "cookies-next";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  // TODO: check for auth
  const body = new URLSearchParams();
  body.append("email", email);
  body.append("password", password);
  const res = await fetch(`./php/auth.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!res.ok && res.status !== 403)
    return new Error("Impossibile effettuare il login, riprova più tardi");

  const { sessionID, access } = await res.json();
  if (access !== "granted") return new Error("Credenziali non valide");

  if (access === "granted") return sessionID;
  /* should not be needed in production
  // create token
  // expires in 10 days
  const expires = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);

  setCookie("PHPSESSID", sessionID, { expires });
  return sessionID;*/
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

  const body = new URLSearchParams();
  body.append("nome", name);
  body.append("cognome", surname);
  body.append("email", email);
  body.append("password", password);
  const res = await fetch("./php/createUser.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!res.ok)
    return new Error("Impossibile creare l'utente, riprova più tardi");

  const { result, error } = await res.json();

  if (result === "failure") {
    // should not happend with auth check
    if (error === "effettuare il login prima")
      return new Error("Impossibile creare l'utente, effettua il login");

    return new Error("Impossibile creare l'utente, riprova più tardi");
  }

  if (result === "success") return { result, error };

  return new Error(JSON.stringify({ result, error }));
}

export async function deleteUser({
  name,
  surname,
}: {
  name: string;
  surname: string;
}) {
  if (!isAuthenticated())
    return new Error("Impossibile rimuovere un utente senza essere loggato");

  const body = new URLSearchParams();
  body.append("nome", name);
  body.append("cognome", surname);
  const res = await fetch("./php/deleteUser.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!res.ok) return new Error("Errore nella risposta");

  const { result, error } = await res.json();
  if (error === "user not found" || error === "missing id")
    return new Error("Utente non trovato");

  if (error === "effettuare prima il login")
    return new Error("Effettua il login");

  if (result === "success") return true;

  return new Error("Errore nella risposta");
}

export function logout() {
  return deleteCookie("PHPSESSID");
}

export function isAuthenticated() {
  return !!getCookie("PHPSESSID");
}
