import React, { useCallback, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { UserPage } from "./pages/UserPage";
import { Posts } from "./pages/Posts";
import { AuthPage } from "./pages/AuthPage";
import { PostsDetails } from "./pages/PostsDetails";
import { NasaNews } from "./pages/NasaNews";


export const useRoutes = isAuthenticated => {

    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/" exact>
                    <NasaNews />
                </Route>
                <Route path="/users" exact>
                    <UserPage />
                </Route>
                <Route path="/posts" exact>
                    <Posts />
                </Route>
                <Route path="/posts/:postId">
                    <PostsDetails />
                </Route>
                <Redirect to="/users" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage  />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}
