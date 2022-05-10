import React, { useRef } from 'react'
import { validatePost } from '../../../services/validationsService';
import "./PostForm.scss";
const PostForm = ({publishCallback, formTitle, initialPostTitle, initialPostContent, initialImageLink, initialVideoLink}) => {
    const postTitleRef = useRef();
    const postContentRef = useRef();
    const postImageLinkRef = useRef();
    const postVideoLinkRef = useRef();



    const handleSubmit = (event) => {
        event.preventDefault();
        const post = {
            title: postTitleRef.current.value,
            text: postContentRef.current.value,
            imageLink: postImageLinkRef.current.value,
            videoLink: postVideoLinkRef.current.value
        }

        const validationErrorMessage = validatePost(post);
        if (validationErrorMessage) {
            alert(validationErrorMessage);
            return;
        }
        publishCallback(post);
    }

    return (
        <div className='post-form'>
            <h1>{formTitle}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Post title' ref={postTitleRef} defaultValue={initialPostTitle}></input>
                <textarea placeholder='Post Content' ref={postContentRef} defaultValue={initialPostContent}></textarea>
                <input type="url" placeholder='Post Image Link' ref={postImageLinkRef} defaultValue={initialImageLink}></input>
                <input type="url" placeholder='Post Video Link' ref={postVideoLinkRef} defaultValue={initialVideoLink}></input>
                <button type='submit'>Publish</button>
            </form>
        </div>
    )
}

export default PostForm