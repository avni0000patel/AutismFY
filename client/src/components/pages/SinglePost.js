import React from 'react';
import Avatar from '@mui/material/avatar';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../CommentList';
import CommentForm from '../CommentForm';

import { QUERY_SINGLE_POST } from '../../utils/queries';

const SinglePost = () => {
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
    // Use `useParams()` to retrieve value of the route parameter `:profileId`
    const { postId } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_POST, {
        // pass URL parameter
        variables: { postId: postId },
    });

    const post = data?.post || {};

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="post my-3" style={styles.post}>
            <h3 className="card-header bg-dark text-light p-2 m-0">
                <Avatar className="post__avatar" style={styles.post__avatar} alt={post.name} src={post.avatar}></Avatar>
                {post.postAuthor} <br />
                <span style={{ fontSize: '1rem' }}>
                    {post.createdAt}
                </span>
            </h3>
            <div>
                <img className="post__image card-text" style={styles.post__image} src={post.image} alt="postimage"></img>
            </div>
            <div className="card-body">
                <p className="post__caption" style={styles.post__caption}>{post.postText}</p>
            </div>

            <div className="my-5">
                <CommentList comments={post.comments} />
            </div>
            <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
                <CommentForm postId={post._id} />
            </div>
        </div>
    );
};

export default SinglePost;
