import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export default function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname
  const email = request.cookies.get('email')?.value
  const isUserRoute = path.startsWith('/admin')

  if (!email && isUserRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
