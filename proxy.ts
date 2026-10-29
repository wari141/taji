import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((request) => {
  const isLoggedIn = !!request.auth;
  const isDashboard = request.nextUrl.pathname.startsWith("/home");

  if (isDashboard && !isLoggedIn) {
    return NextResponse.redirect(
      new URL("/login", request.nextUrl)
    );
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/home/:path*"],
};