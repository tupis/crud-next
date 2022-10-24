import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { verify } from "./services/api/jwt";

const middleware = async (req: NextRequest) => {
  let response = NextResponse.next();
  const url: string = req.url;
  const token: string = String(req.cookies.get("token"));

  function redirect(path: string) {
    const newUrl = new URL(path, url);
    return NextResponse.redirect(newUrl);
  }

  //pathname ===  "/"
  if (req.nextUrl.pathname.length === 1) {
    if (token) {
      const isValidToken = await verify(token, String(process.env.JWT_SECRET));
      if (isValidToken) {
        return redirect("/home");
      }
    }
  }

  if (req.nextUrl.pathname.startsWith("/home")) {
    if (!token) {
      return redirect("/login");
    }
    if (token) {
      const isValidToken = await verify(token, String(process.env.JWT_SECRET));
      if (!isValidToken) {
        return redirect("/login");
      }
    }
  }

  return response;
};

export default middleware;
