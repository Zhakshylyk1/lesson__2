import {Link} from 'react-router-dom'
import {useState} from 'react'
import {useRegisterMutation} from '../api/auth-store.js'

export function RegisterForm() {
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { mutate, isPending } = useRegisterMutation()

    const handleSubmit = (e) => {
        e.preventDefault()

        mutate({
            login,
            email,
            password
        })
    }

    return (
        <div className="rounded-[28px] border border-[#dfe9e2] bg-white p-6 shadow-[0_20px_50px_rgba(22,52,41,0.08)] sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-3 border-b border-[#edf2ee] pb-4">
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6b7a75]">Регистрация</p>
                    <h2 className="mt-2 text-3xl font-bold text-[#1d2321]">Создайте аккаунт</h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf7f2] text-2xl text-[#0d8b67]">✦</div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="register-name" className="mb-2 block text-sm font-medium text-[#30413d]">
                        Имя
                    </label>
                    <input
                        id="register-name"
                        type="text"
                        placeholder="Иван"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        className="w-full rounded-2xl border border-[#dfe8e3] bg-[#f9fbfa] px-4 py-3 text-base text-[#1d2321] placeholder:text-[#7a8784] outline-none transition focus:border-[#0d8b67] focus:bg-white focus:ring-4 focus:ring-[#dff5ee]"
                    />
                </div>

                <div>
                    <label htmlFor="register-email" className="mb-2 block text-sm font-medium text-[#30413d]">
                        Email
                    </label>
                    <input
                        id="register-email"
                        type="email"
                        placeholder="example@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-2xl border border-[#dfe8e3] bg-[#f9fbfa] px-4 py-3 text-base text-[#1d2321] placeholder:text-[#7a8784] outline-none transition focus:border-[#0d8b67] focus:bg-white focus:ring-4 focus:ring-[#dff5ee]"
                    />
                </div>

                <div>
                    <label htmlFor="register-password" className="mb-2 block text-sm font-medium text-[#30413d]">
                        Пароль
                    </label>
                    <input
                        id="register-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-2xl border border-[#dfe8e3] bg-[#f9fbfa] px-4 py-3 text-base text-[#1d2321] placeholder:text-[#7a8784] outline-none transition focus:border-[#0d8b67] focus:bg-white focus:ring-4 focus:ring-[#dff5ee]"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full rounded-2xl bg-[#0d8b67] px-4 py-3 text-base font-semibold text-white shadow-[0_12px_25px_rgba(13,139,103,0.28)] transition hover:bg-[#0b785d]"
                >
                    Создать аккаунт
                </button>
            </form>

            <p className="mt-6 text-center text-sm text-[#586a66]">
                Уже есть аккаунт?{' '}
                <Link to="/auth?step=login" className="font-semibold text-[#0d8b67] hover:text-[#0b7159]">
                    Войти
                </Link>
            </p>
        </div>
    )
}