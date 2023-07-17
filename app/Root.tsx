"use client"

import { useLogin } from '@/hooks/useLogin'
import { atom } from 'jotai'

export const configurationAtom = atom({
    RC_CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
    AUTH_BASE: process.env.NEXT_PUBLIC_AUTH_BASE,
    AUTH_REDIRECT: process.env.NEXT_PUBLIC_AUTH_REDIRECT,
    AWS_POLLY_URL: process.env.NEXT_PUBLIC_AWS_POLLY_URL
})

export function Root() {
    useLogin('/')

    return (
        <div className='space-y-2'>
            <p>This is a starting point for an application using the RingCentral API. It's built with Next.js, Tailwind CSS, Shadcn/ui, and Jotai.</p>
            <p>If your environment variables are set correctly, you should be redirected to the RC Login page if not already logged in. After logging in, you'll be redirected back to this page.</p>
            <p>You'll find your token in local storage with the key 'rc_access_token' along with some other stuff.</p>
        </div>
    )
}