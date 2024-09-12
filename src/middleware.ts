import { NextRequest, NextResponse } from "next/server";

export async function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (next static files)
     * - _next/image (image optimization files)
     * - static files (ico|png|svg|jpg|jpeg|webp|js|css|json|xml|woff|woff2|eot|ttf|otf)
     */
    "/((?!api|_next/static|_next/image|.*\\.ico|.*\\.png|.*\\.svg|.*\\.jpg|.*\\.jpeg|.*\\.webp|.*\\.js|.*\\.css|.*\\.json|.*\\.xml|.*\\.woff|.*\\.woff2|.*\\.eot|.*\\.ttf|.*\\.otf).*)",
  ],
};
