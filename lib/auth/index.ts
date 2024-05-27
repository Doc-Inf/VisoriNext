import { deleteCookie, setCookie } from "cookies-next";
import { encryptJWT } from "../jwt";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  // TODO: check for auth
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1" /* "x", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,}),
      }*/
  );

  if (res.status === 401) return new Error("Credenziali non valide");

  if (!res.ok)
    return new Error("Impossibile effettuare il login, riprova più tardi");

  // create token
  // expires in 10 days
  const expires = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);

  const token = await encryptJWT({
    user: {
      email,
    },
    expires,
  });

  setCookie("session", token, { expires });
  return token;
}

export async function logout() {
  return deleteCookie("session");
}
