import { getCookie } from "cookies-next";
import { SignJWT, jwtVerify } from "jose";

export async function encryptJWT(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10d")
    .sign(new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET));
}

export async function decryptJWT() {
  return await jwtVerify(
    getCookie("session") ?? "",
    new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET),
    { algorithms: ["HS256"] }
  );
}
