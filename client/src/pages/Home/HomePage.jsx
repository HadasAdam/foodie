import React, { useEffect, useState } from 'react'
import "./HomePage.scss";
import Post from './Post/Post';
import { getAllPosts } from "../../services/postsService";
const HomePage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]); 

  //useEffect to run when the page loads
  useEffect(() => {
    
    //useEffect is synchronous, so we need to create a seperate asynchronous function for data fetching
    const fetchData = async () => {

      //getting the data from the server
      setIsLoading(true);
      const posts = await getAllPosts();
      setIsLoading(false);

      //sets the posts list state
      setPosts(posts);

    }

    //gets all of the posts from the server and puts them in "posts" state
    fetchData();

  }, []);

  return (
    <main className="homepage">
      {/* Shows loading indication while loading posts from server */}
      {isLoading && <h2>Loading posts...</h2>}

      {/* Goes through all of the posts, and renders them */}
      {
        posts.map(post => 
          <Post
            title={post.title}
            text={post.text}
            imageLink={post.imageLink}
            videoLink={post.videoLink}
            key={post.title}
          />)
      }
    </main>
  )
}

export default HomePage