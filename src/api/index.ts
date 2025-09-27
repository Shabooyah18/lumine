import { createFetch } from '@vueuse/core'

const isDev = import.meta.env.MODE === 'development'
export const baseUrl = isDev ? 'https://' + import.meta.env.VITE_GCOA_API_HOST : ''
export const oldBaseUrl = isDev ? 'https://' + import.meta.env.VITE_GCOA_OLD_HOST : ''

export const useTCRApiFetch = createFetch({
    baseUrl: baseUrl + '/api',
    fetchOptions: {
        credentials: 'include',
    },
    options: {
        onFetchError(ctx) {
            if (ctx.response?.status === 401) {
                window.location.assign(`${oldBaseUrl}/j_spring_security_logout`)
            }
            return ctx
        },
    },
})

export const useTCRFetch = createFetch({
    baseUrl: baseUrl,
    fetchOptions: {
        credentials: 'include',
    },
    options: {
        onFetchError(ctx) {
            if (ctx.response?.status === 401) {
                window.location.assign(`${oldBaseUrl}/j_spring_security_logout`)
            }
            return ctx
        },
    },
})
