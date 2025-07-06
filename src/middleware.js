import Cookies from 'js-cookie'
import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const token = request.cookies.get('my_job_token')?.value;
  if(!token){
     return NextResponse.redirect(new URL('/login', request.url))
  }
 
//   return NextResponse.redirect(new URL('/home', request.url))
}
 
export const config = {
  matcher: '/dashboard',
}