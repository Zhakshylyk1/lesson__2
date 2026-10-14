import { useProductStore } from '../modules/Products'

export function Home() {
    const { data, isLoading } = useProductStore()

    if (isLoading) return <progress />

    return (
        <>
            <h1 className={'text-4xl font-bold'}>Products</h1>

            <ul>
                {data?.map((item) => (
                    <li key={item._id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </>
    )
}