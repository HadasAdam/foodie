import posts from "./mock/posts.json";

// TODO: this function currently returns data from ./mock/posts.json, we need to change it so it pulls data from the server
export const getAllPosts = async () => {

    //made to act like a server, waits a second and then replies
    await new Promise(t => setTimeout(t, 1000));

    return posts;
}