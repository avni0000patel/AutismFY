import React from 'react';
import Avatar from '@mui/material/avatar';

const PostList = ({ posts }) => {
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
    if (!posts.length) {
        return <h3>No Posts Yet</h3>;
    }

    return (
        <div>
            {posts &&
                posts.map((post) => (
                    <div key={post._id} className="post card col-12 my-4" style={styles.post}>
                        <div className="post__header card-title" style={styles.post__header}>
                            <Avatar className="post__avatar" style={styles.post__avatar} alt={post.name} src={post.avatar}></Avatar>
                            <h3>{post.name}</h3>
                        </div>
                        <img className="post__image card-text" style={styles.post__image} src={post.image} alt="postimage"></img>
                        <div className="post__caption" style={styles.post__caption}><strong>{post.name} </strong>{post.captions}</div>
                    </div >
                ))
            }
        </div >
    );
};

export default PostList;
