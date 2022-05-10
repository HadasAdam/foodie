import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../../../services/postsService';
import PostRow from './PostRow/PostRow';
import "./PostsListPage.scss";

const PostsListPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllPosts();
            setPosts(data);
        }
        fetchData();
    }, [])

    return (
        <main className='posts-list-page'>
            <div className='table-header'>
                <span>Title</span>
                <span>Author</span>
                <span>Action</span>
            </div>
            {posts.map(post =>
                <PostRow
                    author={post.authorName}
                    key={post.id} title={post.title}
                    id={post.id}
                    removePostFromList={() => setPosts(posts.filter(a => a.id !== post.id))}
                />)}
        </main>
    )
}

export default PostsListPage