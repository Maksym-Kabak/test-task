import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "../halpers/useQuery";
import { useDispatch, useSelector } from "react-redux";
import { selectPostsItems, selectIsPostsLoading } from "../store/ducks/posts/selector";
import { fetchAddPost, fetchDeletePost, fetchPosts } from "../store/ducks/posts/actionCreator";
import { Loader } from "../components/Loader";
import { PostForm } from "../components/PostForm";
import Grid from "@material-ui/core/Grid";

export const Posts = () => {
    const query = useQuery();
    let userId = Number(query.get('userId'))
    const dispatch = useDispatch();
    const posts = useSelector(selectPostsItems);
    const loading = useSelector(selectIsPostsLoading);

    if (!userId) {
        userId = 1
    }
    const addPostWithForm = useCallback((title, body) => {
        dispatch(fetchAddPost({title, body, userId}))
    }, [dispatch, userId])

    const deletePost = useCallback(
        (id) => {
        dispatch(fetchDeletePost(id))
    }, [dispatch])

    useEffect(() => {
        if (userId) {
            dispatch(fetchPosts(userId));
        }
    }, [dispatch, userId]);

    if (loading) return <Loader/>
    return (
        <div>
            <Grid container justify='center' item>
                <PostForm buttonName='Add Post' addPost={addPostWithForm} />
            </Grid>
            { posts.map(post => (
                <div className="col s6 m12" key={ post.id }>
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{ post.title }</span>
                            <p>{ post.body }</p>
                        </div>
                        <div className="card-action right-align ">
                            <button className="btn red" onClick={() => deletePost(post.id)} style={ { marginRight: '1rem' } }>
                                <i className="fas fa-trash"></i>
                            </button>
                            <Link to={ `/posts/${ post.id }?userId=${ post.userId }` } className="btn grey">Read
                                More</Link>
                        </div>
                    </div>
                </div>
            )) }

        </div>

    )
}
