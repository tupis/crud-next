import { SignJWT, jwtVerify, type JWTPayload } from "jose";

type Token = any;

export async function sign(payload: Token, secret: string): Promise<string> {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60 * 24 * 5; // one hour

  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(secret));
}

export async function verify(token: string, secret: string): Promise<Token> {
  const isValidToken = await jwtVerify(token, new TextEncoder().encode(secret))
    .then((verify) => true)
    .catch((verify) => false);

  return isValidToken;
}
