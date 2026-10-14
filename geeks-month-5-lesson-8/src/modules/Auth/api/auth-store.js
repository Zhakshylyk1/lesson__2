import {useMutation} from '@tanstack/react-query'
import { $mainApi } from '../../../shared/api/http.js'
import {useNavigate} from 'react-router-dom'
import {toast} from 'sonner'
import { useAuth } from "../hooks/use-auth.js";

export const useRegisterMutation = () => {
    const navigate = useNavigate()

    const setAuth = useAuth((state) => state.setAuth)

    return useMutation({
        mutationFn: async (payload) => {
            const { data } = await $mainApi.post('/auth/sign-up', payload)
            return data
        },
        onSuccess: (respData) => {
            localStorage.setItem('token', respData.accessToken)
            navigate('/')
            toast.info('Successfully registered')
            setAuth(true)
        }
    })
}

export const useLoginMutation = () => {
    const navigate = useNavigate()

    const setAuth = useAuth((state) => state.setAuth)

    return useMutation({
        mutationFn: async (payload) => {
            const { data } = await $mainApi.post('/auth/sign-in', payload)
            return data
        },
        onSuccess: (respData) => {
            localStorage.setItem('token', respData.accessToken)
            navigate('/')
            toast.info('Successfully logined')
            setAuth(true)
        }
    })
}

export const useLogoutMutation = () => {
    const navigate = useNavigate()

    const clear = useAuth((state) => state.clear)

    return useMutation({
        mutationFn: async () => {
            await $mainApi.post('/auth/logout')
        },
        onSuccess: () => {
            localStorage.removeItem('token')
            navigate('/auth')
            clear()
        }
    })
}


