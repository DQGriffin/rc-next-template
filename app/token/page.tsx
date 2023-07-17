"use client"

import { useRouter } from "next/navigation"

interface TokenProps {
    searchParams: {
        accessToken: string,
        refreshToken: string,
        destination: string
    }
}

export default function Token(props: TokenProps) {
    if (typeof window === 'undefined') return
    console.log(props.searchParams)
    const {accessToken, refreshToken, destination} = props.searchParams
    const router = useRouter()
    if (!accessToken || !refreshToken) return

    let date = new Date()
    date.setTime(date.getTime() + 1 * 60 * 60 * 1000)

    localStorage.setItem('rc_access_token', accessToken)
    localStorage.setItem('rc_token_expiry', `${date.getTime()}`)
    localStorage.setItem('rc_refresh_token', refreshToken ?? '')

    router.push(`/${destination}`)

    return (
        <></>
    )
}