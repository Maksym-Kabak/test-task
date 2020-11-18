import React, { useEffect} from 'react';
import { UserCard } from "../components/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { selectIsUsersLoading, selectUsersItems } from "../store/ducks/users/selector";
import { fetchUsers } from "../store/ducks/users/actionCreator";
import { Loader } from "../components/Loader";

export const UserPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsersItems);
    const loading = useSelector(selectIsUsersLoading);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    if (loading) return <Loader />
    return (
        <div className="row">
            <div className="col s8 offset-s2" style={ { paddingTop: '2rem' } }>
                <UserCard users={users} />
            </div>
        </div>
    )
}
