import { createContext } from 'react';

function noop() {

}

export const AuthContext = createContext({
    email: null,
    login: noop,
    logout: noop,
})
