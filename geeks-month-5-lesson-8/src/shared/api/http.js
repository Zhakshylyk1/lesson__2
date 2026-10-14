import axios from 'axios'

// access token - токен доступа
// refresh token - токен который оживляет access token

const createAxios = () => axios.create({
    baseURL: 'https://edu-market.online/api/v1',
    // baseURL: 'http://localhost:8080/api/v1',
    withCredentials: true
})

const $mainApi = createAxios() // for public endpoints
const $authApi = createAxios() // for private endpoints

$authApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
)

$authApi.interceptors.response.use(
    (config) => config,

    async (error) => {
        const currentRequest = error.config

        if (currentRequest && error.response.status === 401) {
            try {
                const { data } = await $mainApi.post('/auth/refresh')

                if (data?.accessToken) {
                    localStorage.setItem('token', data.accessToken)
                }

                return $authApi.request(currentRequest)
            }
            catch (e) {
                localStorage.removeItem('token')
                window.location.href = "/auth"

                return Promise.reject(e)
            }
        }

        return Promise.reject(error)
    }
)

export { $mainApi, $authApi }
