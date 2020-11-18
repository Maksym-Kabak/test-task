import { useCallback, useState, useEffect } from 'react';

const storageName = 'userData';

export const useAuth = () => {
    const [email, setEmail] = useState(null);

    const login = useCallback((emailUser) => {
        setEmail(emailUser);

        localStorage.setItem(storageName, JSON.stringify({
            email: emailUser
        }))
    }, []);

    const logout = useCallback(() => {
        setEmail(null);
        localStorage.removeItem(storageName);
    }, []);

    useEffect(()=> {
        const data = JSON.parse(localStorage.getItem(storageName));

        if (data && data.email) {
            login(data.email)
        }
    }, [login])

    return { login, logout, email}
}
