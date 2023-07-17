import { configurationAtom } from '@/app/Root'
import { useAtomValue } from 'jotai'

export function useLogin(callbackroute: string = '', isSyncing: boolean = false) {
    if (typeof window === 'undefined') return
    const configuration = useAtomValue(configurationAtom)
    let token = localStorage.getItem('rc_access_token')
    let expiration = localStorage.getItem('rc_token_expiry')

    // Sync is running, don't redirect to login page
    if (isSyncing) return

    const isTokenExpired = () => {
        if (!expiration) return true

        let expirationTime = new Date(parseInt(expiration))
        let currentTime = new Date()

        if (currentTime >= expirationTime) return true

        return false
    }

    if (!token || isTokenExpired()) {
        let url = `${configuration.AUTH_BASE}&client_id=${configuration.RC_CLIENT_ID}&redirect_uri=${configuration.AUTH_REDIRECT}&state=${callbackroute}`
        console.log(`URL: ${url}`)
        window.location.replace(url)
    }

}