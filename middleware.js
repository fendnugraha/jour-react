import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = request.cookies.get("XSRF-TOKEN"); // Sanctum uses cookies
  const protectedRoutes = ["/dashboard", "/profile", "/settings"];

  if (
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    if (!token) {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*"],
};
