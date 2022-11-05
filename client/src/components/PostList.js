import React from 'react';

const PostList = ({ posts, title }) => {
    const styles = {
        post: {
            backgroundColor: 'white',
            border: '1px solid lightgray',
            maxWidth: '700px',
            marginBottom: '45px',
        },
        post__header: {
            display: 'flex',
            alignItems: 'center',
            padding: '20px 15px',
            color: 'black',
        },
        // post__avatar: {
        //     marginRight: '10px',
        // },
        post__image: {
            width: '100%',
            objectFit: 'contain',
            borderTop: '1px solid lightgray',
            borderBottom: '1px solid lightgray',
        },
        post__text: {
            fontWeight: 'normal',
            padding: '20px 15px',
        }
    }

    if (!posts.length) {
        return <h3>No Posts Yet</h3>;
    }
    console.log(posts);
    return (
        <div>
            <h3 className="text-primary">{title}</h3>
            <div className="flex-row justify-space-between my-4">
                {posts &&
                    posts.map((post) => (
                        <div key={post._id} className="col-12">
                            <div className="post" style={styles.post}>
                                <div className="card mb-3">
                                    <div className="post__header card-header" style={styles.post__header}>
                                        <h3>{post.name}</h3>
                                    </div>
                                    <div className="card-image">
                                        <img style={styles.post__image} src={post.image} alt="postimage"></img>
                                    </div>
                                    <h6 className="text-dark">
                                        {post.captions}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div >
    );
};

export default PostList;
