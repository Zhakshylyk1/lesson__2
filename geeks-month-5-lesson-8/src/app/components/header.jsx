import { NavLink } from 'react-router-dom'
import { useAuth, useLogoutMutation } from '../../modules/Auth'

const navigation = [
    {to: '/orders', label: 'Заказы', icon: OrdersIcon},
    {to: '/favorites', label: 'Избранное', icon: FavoriteIcon},
    {to: '/cart', label: 'Корзина', icon: CartIcon},
]

function LogoIcon() {
    return (
        <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true">
            <rect x="3" y="3" width="14" height="14" rx="2" fill="rgba(255,255,255,0.9)" />
            <rect x="23" y="3" width="14" height="14" rx="2" fill="rgba(255,255,255,0.9)" />
            <rect x="3" y="23" width="14" height="14" rx="2" fill="rgba(255,255,255,0.9)" />
            <rect x="23" y="23" width="14" height="14" rx="2" fill="rgba(255,255,255,0.9)" />
            <rect x="13" y="13" width="14" height="14" rx="2" fill="rgba(15,120,97,0.85)" />
        </svg>
    )
}

function SearchIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-[#4d4d4d]" aria-hidden="true">
            <circle cx="11" cy="11" r="6" />
            <path d="m16 16 5 5" strokeLinecap="round" />
        </svg>
    )
}

function UserIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 19c1.7-3 4.4-4.5 8-4.5S18.3 16 20 19" strokeLinecap="round" />
        </svg>
    )
}

function OrdersIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
            <path d="M7 4h10l3 4v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8l3-4Z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 4v5h8V4M8 12h8" strokeLinecap="round" />
        </svg>
    )
}

function FavoriteIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
            <path d="M12 20.25 4.8 13.8a4.9 4.9 0 0 1 6.9-6.9l.3.3.3-.3a4.9 4.9 0 1 1 6.9 6.9L12 20.25Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function CartIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
            <circle cx="9" cy="18" r="1.5" />
            <circle cx="17" cy="18" r="1.5" />
            <path d="M3 4h2l2.2 9.2A2 2 0 0 0 9.1 15h8.8a2 2 0 0 0 2-1.6L21 7H7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function HeaderLink({to, label, Icon}) {
    return (
        <NavLink
            to={to}
            className={({isActive}) =>
                `flex items-center gap-2 rounded-full px-2 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-[#0d8b67]' : 'text-[#2b2d2d] hover:text-[#0d8b67]'
                }`
            }
        >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eff2f1] text-[#2b2d2d]">
                <Icon />
            </span>
            <span>{label}</span>
        </NavLink>
    )
}

export function Header() {
    const isAuth = useAuth((state) => state.isAuth)

    const {mutate, isPending} = useLogoutMutation()

    return (
        <header className="border-b border-[#b7d6c6] bg-[#edf5ef] py-3">
            <div className="mx-auto flex max-w-[1360px] items-center gap-4 px-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#0c8e6b] bg-[#0c8e6b] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]">
                        <LogoIcon />
                    </div>
                    <NavLink to="/" end className="text-[2.1rem] font-black tracking-[-0.08em] text-[#0c8e6b]">
                        Market
                    </NavLink>
                </div>

                <label className="flex flex-1 items-center gap-3 rounded-[28px] border-2 border-[#0c8e6b] bg-white px-4 py-3 shadow-[0_2px_0_rgba(12,142,107,0.08)]">
                    <SearchIcon />
                    <input
                        type="search"
                        placeholder="Найти товары"
                        className="w-full border-0 bg-transparent text-base text-[#202322] placeholder:text-[#7d8b89] focus:outline-none"
                    />
                </label>

                <nav className="flex items-center gap-2 text-[0.95rem]">
                    {isAuth
                        ? <button onClick={mutate} disabled={isPending}>Выйти</button>
                        : <HeaderLink to={"/auth"} label={"Войти"} Icon={UserIcon} />
                    }

                    {navigation.map(({to, label, icon: Icon}) => (
                        <HeaderLink key={to} to={to} label={label} Icon={Icon} />
                    ))}
                </nav>
            </div>
        </header>
    )
}
