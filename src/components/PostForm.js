import React from 'react';
import { useForm } from "react-hook-form";

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export const PostForm = ({ addPost, buttonName, body, title }) => {

    const { register, handleSubmit, reset } = useForm({
        defaultValues: { title, body }
    })

    const onSubmit = ({ title, body }) => {
        addPost(title, body);
        reset();
    }

    return (
        <Grid item xs={12} sm={7}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <TextField
                    inputRef={register({ required: true })}
                    label='Name post'
                    name='title'
                    variant='outlined'
                    fullWidth
                    multiline
                    margin='normal'
                    required={true}
                />
                <TextField
                    inputRef={register({ required: true })}
                    label='Description'
                    name='body'
                    variant='outlined'
                    fullWidth
                    multiline
                    required={true}
                    margin='normal'
                />


                <Button type='submit' variant='contained' color='primary'>
                    {buttonName}
                </Button>
            </form>
        </Grid>
    )
}
