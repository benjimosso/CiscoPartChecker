import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import {cookies} from 'next/headers'
import { NextResponse } from "next/server"

// This is the callback route for the OAuth flow. It exchanges the code for a session. 
// IMPORTANTE!!! DO NOT USE AUTH-HELPERS-NEXTJS IN THIS FILE, CHANGE TO @supabase/ssr

export async function GET(request) {
    console.log('GET /api/auth/callback')
    const url = new URL(request.url)
    const code = url.searchParams.get('code')

    if (code) {
        const superbase = createRouteHandlerClient({cookies})
        console.log(cookies)
        await superbase.auth.exchangeCodeForSession(code)
    } else {
        console.log('No code found in query string')
    }

    return NextResponse.redirect(url.origin)
}