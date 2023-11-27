export { default } from "next-auth/middleware"

export const config = { matcher: ['/user/:path*',"/page/:path*","/doctor/:path*"] }