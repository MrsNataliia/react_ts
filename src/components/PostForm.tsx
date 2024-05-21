import React, {FC, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {IPost} from "../models/postInterfacel";
import {postService} from "../service/postService";
import {postValidator} from "../validators/post.Validator";

interface IProps{
    changeTrigger: () => void
}


const PostForm:FC<IProps> = ({changeTrigger}) => {
    const {
        reset, register,
        handleSubmit,
        formState: {errors}
    } = useForm<IPost>({mode:"all", resolver: joiResolver(postValidator)})
    const [post, setPost] = useState<IPost>()
    const save: SubmitHandler<IPost> = (post) =>{
        postService.create(post).then(value => setPost(value.data))
        changeTrigger()
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type='number' placeholder={'userId'} {...register('userId')}/>
            {errors.userId && <span>{errors.userId.message}</span> }
            <br/>
            <input type='text' placeholder={'title'} {...register('title')}/>
            {errors.title && <span>{errors.title.message}</span> }
            <br/>
            <input type='text' placeholder={'body'} {...register('body')}/>
            {errors.body && <span>{errors.body.message}</span> }
            <br/>
            <button>save</button>

            {post && <div>
                <h3>New post</h3>
                <h4>{post.title}</h4>
                <p>post ID: {post.id}</p>
                <p>{post.body}</p>
            </div> }
        </form>
    );
};

export {PostForm};