import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';

const PostList = ({
    posts,
    title,
    showTitle = true,
    showUsername = true,
}) => {
    if (!posts.length) {
        return <h3>No Posts Yet</h3>;
    }
    const styles = {
        post: {
            backgroundColor: 'white',
            border: '1px solid lightgray',
            maxWidth: '700px',
            margin: 'auto',
        },
        post__header: {
            display: 'flex',
            alignItems: 'center',
            padding: '5px 5px',
            color: 'black',
        },
        post__avatar: {
            marginRight: '10px',
        },
        post__image: {
            width: '100%',
            objectFit: 'contain',
            borderTop: '1px solid lightgray',
            borderBottom: '1px solid lightgray',
        },
        post__caption: {
            fontWeight: 'normal',
            padding: '5px 5px',
            color: 'black',
        },
    }
    return (
        <div>
            {showTitle && <h3>{title}</h3>}
            {posts &&
                posts.map((post) => (
                    <div key={post._id} className="post card mb-3" style={styles.post}>
                        <h4 className="post__header card-header bg-light text-dark p-2 m-0" style={styles.post__header}>
                            <Avatar className="post__avatar" style={styles.post__avatar} alt={post.name} src="/static/images/avatar/1.jpg"></Avatar>
                            {showUsername ? (
                                <Link
                                    className="text-dark"
                                    to={`/profiles/${post.postAuthor}`}
                                >
                                    {post.postAuthor} <br />
                                    <span style={{ fontSize: '1rem' }}>
                                        {post.createdAt}
                                    </span>
                                </Link>
                            ) : (
                                <>
                                    <span style={{ fontSize: '1rem' }}>
                                        {post.createdAt}
                                    </span>
                                </>
                            )}
                        </h4>
                        <div>
                            <img className="post__image card-text" style={styles.post__image} src={post.image} alt="postimage"></img>
                        </div>
                        <div className="card-body">
                            <p className="post__caption" style={styles.post__caption}>{post.postText}</p>
                        </div>
                        <Link
                            className="btn btn-primary btn-block btn-squared"
                            to={`/posts/${post._id}`}
                        >
                            Join the discussion on this post.
                        </Link>
                    </div>
                ))}
        </div>
    );
};

export default PostList;
