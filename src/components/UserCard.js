import React from 'react';
import { Link } from "react-router-dom";

export const UserCard = ({ users }) => {
    return (
        <>
            { users.map(user => {
                return (
                    <div className="card blue-grey darken-1 center " key={ user.id }>
                        <div className="card-content white-text">
                            <span className="card-title">Name: <i>{ user.name }</i></span>
                            <span className="card-title">Email: <strong>{ user.email }</strong></span>
                        </div>
                        <div className="card-action center">
                            <Link to={ `/posts?userId=${ user.id }` }>Show Posts</Link>
                        </div>
                    </div>
                )
            }) }
        </>

    )
}
