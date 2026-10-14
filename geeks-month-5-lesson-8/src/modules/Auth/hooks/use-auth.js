import {create} from 'zustand'

// middleware - persist

export const useAuth = create((set) => ({
    isAuth: Boolean(localStorage.getItem('token')),
    user: null,

    setAuth: (bool) => set({ isAuth: bool }),
    setUser: (user) => set({ user }),
    clear: () => set({ isAuth: false, user: null })
}))
