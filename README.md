## About this repo
This repo is an opinionated starting point for a web app using the RingCentral API. It uses TypeScript, Next.js, Tailwind, Shadcn/ui, and Jotai.

## Instructions
1. Create an app in the RingCentral developer portal
2. Create a .env file in the root of the directory and supply your app's credentials. See the environment variables section below
3. Run `npm run dev`
4. Go to the URL in your browser and behold the gratest starting point you've ever seen in your life

## Environment variables
```
RC_CLIENT_ID= Your app's client ID
RC_CLIENT_SECRET= Your app's client secret
NEXT_PUBLIC_CLIENT_ID=Your app's client ID
NEXT_PUBLIC_AUTH_BASE=https://platform.ringcentral.com/restapi/oauth/authorize?response_type=code
NEXT_PUBLIC_AUTH_REDIRECT= Your app's redirect URL
BASE_URL= Your app's base URL. When running locally, this might look like: http://127.0.0.1:3000
```
