
import { useFavoritesStore } from "../modules/Favorites";

export function Favorites() {
    const { data, isLoading, refetch } = useFavoritesStore();

    if (isLoading) return <progress />;

    return (
        <>
            <h1 className="text-4xl font-bold">Favorites</h1>

            <button onClick={refetch}>REFETCH</button>

            <ul>
                {data?.map((item) => (
                    <li key={item._id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </>
    );
}
