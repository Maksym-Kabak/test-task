import { combineReducers } from 'redux';
import { postReducer } from "./ducks/post/postReducer";
import { postsReducer } from "./ducks/posts/postsReducer";
import { usersReducer } from "./ducks/users/usersReducer";
import { nasaReducer } from "./ducks/nasa/nasaReducer";

export const rootReducer = combineReducers( {
    post: postReducer,
    posts: postsReducer,
    users: usersReducer,
    nasa: nasaReducer
})
