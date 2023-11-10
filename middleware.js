export { default } from "next-auth/middleware"

export const config = { matcher: ["/page/:path*","/user/:path*"] }

