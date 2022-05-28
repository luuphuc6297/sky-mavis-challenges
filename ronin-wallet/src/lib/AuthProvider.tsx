import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from 'utils';

interface AuthProviderProps {
    children: React.ReactNode;
}
export const AuthContext = React.createContext<any | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const token = getToken();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!token) navigate('/login', { replace: true });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    const contextValue = React.useMemo(
        () => ({
            isLogged: !!token,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
