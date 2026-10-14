import {useQuery} from '@tanstack/react-query'
import { $mainApi } from '../../../shared/api/http.js'

export const useProductStore = () => useQuery({
    queryKey: ['products'],
    queryFn: async () => {
        const { data } = await $mainApi.get('/products')
        return data?.data
    }
})
