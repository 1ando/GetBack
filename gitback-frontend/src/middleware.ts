import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    const cookie = req.cookies.get('email')
    const { pathname, origin } = req.nextUrl

    if (!req.headers.get('accept')?.includes('text/html')) {
        return NextResponse.next()
    }

    if (pathname.startsWith('/AccountPage') && cookie) {
        return NextResponse.redirect(`${origin}/`)
    }

    if (pathname.startsWith('/AccountPage')) {
        return NextResponse.next()
    }

    if (!cookie) {
        return NextResponse.redirect(`${origin}/AccountPage`)
    }

    return NextResponse.next()
}