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
  const res = await fetch(`/php/auth.php`, {
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

export function logout() {
  return deleteCookie("PHPSESSID");
}

export function isAuthenticated() {
  return !!getCookie("PHPSESSID");
}
