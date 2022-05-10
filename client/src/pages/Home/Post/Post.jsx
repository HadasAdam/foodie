import "./Post.scss";

const Post = ({ title, text, imageLink, videoLink, authorName, createDate }) => {
    return (
        <article className='post'>
            {/* Post title */}
            <h2>{title}</h2>

            {/* Post author*/}
            <h3>Written by: {authorName} at {new Date(createDate).toUTCString()}</h3>
            
            {/* Post text */}
            <p>{text}</p>

            {/* Post video, shows only if the videoLink property is not null */}
            {videoLink &&
                <video controls>
                    <source src={videoLink} />
                </video> }

            {/* Post image, shows only if the imageLink property is not null  */}
            {imageLink &&
                <img src={imageLink} alt={title} /> }
        </article>
    )
}

export default Post