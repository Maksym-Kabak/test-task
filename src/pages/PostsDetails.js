import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useQuery } from "../halpers/useQuery";
import { selectCommentsItem, selectIsPostLoading, selectPostItem } from "../store/ducks/post/selector";
import { fetchComments, fetchPost, fetchUpdatePost } from "../store/ducks/post/actionCreator";

import { Loader } from "../components/Loader";
import { PostForm } from "../components/PostForm";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ArrowDownI from '@material-ui/icons/KeyboardArrowDown'
import ArrowUpI from '@material-ui/icons/KeyboardArrowUp'

export const PostsDetails = () => {
    const [open, setOpen] = useState(false);
    const query = useQuery();
    let userId = query.get('userId');

    const { postId } = useParams();

    const dispatch = useDispatch();
    const post = useSelector(selectPostItem);
    const comments = useSelector(selectCommentsItem);
    const loading = useSelector(selectIsPostLoading);

    const updatePost = useCallback(
        (title, body) => {
            dispatch(fetchUpdatePost({ title, body, id: +postId, userId: +userId }))
            setOpen(false)
        },
        [dispatch, postId, userId]
    )


    useEffect(() => {
        if (postId) {
            dispatch(fetchPost(+postId));
            dispatch(fetchComments(+postId));
        }
    }, [dispatch, postId])

    if(loading) return <Loader />
    if (!post) return <div> no yet this post</div>
    return (
        <>
            <div className="card  indigo lighten-5 z-depth-3" style={ { marginTop: '5rem' } }>
                <div className="card-content black-text">
                    <span className="card-title">{ post.title }</span>
                    <p>{ post.body }</p>
                    <Grid item xs={12}>
                        <Button variant='outlined'  color='primary' onClick={() => setOpen(!open)}>
                            {open ? (
                                <>
                                    Close form <ArrowUpI />
                                </>
                            ) : (
                                <>
                                    Open edit form <ArrowDownI />
                                </>
                            )}
                        </Button>
                    </Grid>
                {open && (
                    <Grid container justify='center' item>
                        <PostForm
                            buttonName='Update'
                            addPost={updatePost}
                            title={post.title}
                            body={post.body}
                        />
                    </Grid>
                )}
                </div>
            </div>

            <strong>Comments:</strong>
            { comments.map(comment => (
                <div className="card grey lighten-2" key={comment.id}>
                    <div className="card-content black-text">
                        <span className="card-title"><i className=" material-icons">email</i> { comment.email }</span>
                        <p>{ comment.body }</p>
                    </div>
                </div>
            )) }

        </>

    )
}
