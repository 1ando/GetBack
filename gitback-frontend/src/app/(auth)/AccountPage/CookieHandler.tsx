'use server';
import { NextResponse, NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {

    const accessToken = request.cookies.get('access-token')?.value

    console.log( accessToken )

    const response = NextResponse.next()

    response.cookies.set('access-token', 'Your secret token')

    return response
}