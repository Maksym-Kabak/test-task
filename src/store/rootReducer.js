import { combineReducers } from 'redux';
import { postReducer } from "./ducks/post/postReducer";
import { postsReducer } from "./ducks/posts/postsReducer";
import { usersReducer } from "./ducks/users/usersReducer";

export const rootReducer = combineReducers( {
    post: postReducer,
    posts: postsReducer,
    users: usersReducer
})
