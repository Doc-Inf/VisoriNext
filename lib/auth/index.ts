import { deleteCookie, getCookie, setCookie } from "cookies-next";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  // TODO: check for auth
  const res = await fetch("api/auth", {
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

  /* with JWT
  const token = await encryptJWT({
    user: {
      nome,
      cognome,
      email: emailWS,
      sessionID,
    },
    expires,
  });
*/

  setCookie("PHPSESSID", sessionID, { expires });
  return sessionID;
}

export function logout() {
  return deleteCookie("PHPSESSID");
}

export function isAuthenticated() {
  return !!getCookie("PHPSESSID");
}
