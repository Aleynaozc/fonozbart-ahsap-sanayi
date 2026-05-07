import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  if (hostname === "fnzwood.com") {
    const url = request.nextUrl.clone();
    url.hostname = "www.fnzwood.com";
    url.protocol = "https";

    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|sitemap-0.xml).*)"],
};
