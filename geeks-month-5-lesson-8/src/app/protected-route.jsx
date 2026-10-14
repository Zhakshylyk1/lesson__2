
import { useEffect } from 'react';
import { useAuth } from '../modules/Auth';
import { toast } from 'sonner';
import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute() {
    const isAuth = useAuth((state) => state.isAuth);

    useEffect(() => {
        if (!isAuth) {
            toast.info('Сперва войдите');
        }
    }, [isAuth]);

    if (!isAuth) {
        return <Navigate to="/auth" replace />;
    }

    return <Outlet />;
}
