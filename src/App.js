import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { Navbar } from "./components/Navbar";
import { AuthContext } from "./context/AuthContext";

import 'materialize-css';



function App() {
    const { email, login, logout } = useAuth();
    const isAuthenticated = !!email;
    const routes = useRoutes(isAuthenticated);

    return (
        <AuthContext.Provider value={ {
            email, login, logout
        } }>
            <Router>
                { isAuthenticated && <Navbar/> }
                <div className="container">
                    { routes }
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
