import {SDK} from "@ringcentral/sdk";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const code = request.nextUrl.searchParams.get('code')
    const state = request.nextUrl.searchParams.get('state')
    const baseURL = process.env.BASE_URL
    if (!code || !baseURL) return

    const rcsdk = new SDK({
        server: SDK.server.production,
        clientId: process.env.RC_CLIENT_ID,
        clientSecret: process.env.RC_CLIENT_SECRET,
        redirectUri: process.env.NEXT_PUBLIC_AUTH_REDIRECT
    })

    const res = await rcsdk.login({code: code})
    const json = await res.json()
    const accessToken = json['access_token']
    const refreshToken = json['refresh_token']

    return NextResponse.redirect(`${baseURL}/token?accessToken=${accessToken}&refreshToken=${refreshToken}&destination=${state}`)
}