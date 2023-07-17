import {SDK} from "@ringcentral/sdk";

export async function GET() {
    console.log('Got request')
    const rcsdk = new SDK({
        server: SDK.server.production,
        clientId: 'yourClientId',
        clientSecret: 'yourClientSecret',
        redirectUri: '' // optional, but is required for Implicit Grant and Authorization Code OAuth Flows (see below)
    })
    
    return new Response('rgirigk')
}