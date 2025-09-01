import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// export async function middleware(req: NextRequest) {
//   const token = req.cookies.get("auth_token"); // ou nome do cookie que Laravel gera

//   console.log('aqui');
//   if (!token) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/social-media/:path*"], // protege todas rotas /dashboard/*
// };


export async function middleware(req: NextRequest) {
  console.log('Middleware rodando!', req.url);
  console.log('Cookies:', req.cookies.getAll()); // lista todos cookies
  return NextResponse.next();
}
