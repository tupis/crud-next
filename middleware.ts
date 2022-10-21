import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "cookies-next";

const middleware = (req: NextRequest) => {
  const url = req.url;
  const loginUrl = new URL("/login", url);

  const getUser = getCookie("user");

  if (url.includes("/home")) {
    if (!getUser) return NextResponse.redirect(loginUrl);
  }
};

export default middleware;
