import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  const isPublicPath = pathName === "/login" || pathName === "/register";
  const token = request.cookies.get("next-auth.session-token")?.value || request.cookies.get("__Secure-next-auth.session-token")?.value || "";


  if (token && isPublicPath) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }


  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }


  return null;
}


export const config = {
  matcher: ["/", "/login", "/register","/checkout", "/dashboard", "/dashboard/:path*"],
};
