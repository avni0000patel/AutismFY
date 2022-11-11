import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const PostForm = () => {
    const styles = {
        add__post__button: {
            color: 'white',
            background: 'linear-gradient(90deg, rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%) ',
        }
    }
    const [image, setImage] = useState('');

    const [postText, setpostText] = useState('');

    const [addPost, { error }] = useMutation(ADD_POST, {
        update(cache, { data: { addPost } }) {
            try {
                const { posts } = cache.readQuery({ query: QUERY_POSTS });

                cache.writeQuery({
                    query: QUERY_POSTS,
                    data: { posts: [addPost, ...posts] },
                });
            } catch (e) {
                console.error(e);
            }

            // update me object's cache
            try {
                const { me } = cache.readQuery({ query: QUERY_ME });
                // a good spot to check what `me` is: console.log(me)
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: { ...me, posts: [...me.posts, addPost] } },
                });
            } catch (e) {
                console.error(e);
            }
        },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(image);
        try {
            const { data } = await addPost({
                variables: {
                    image,
                    postText,
                    postAuthor: Auth.getProfile().data.username,
                },
            });
            setImage('')
            setpostText('');
        } catch (err) {
            console.error(err);
        }
    };

    const handlePhoto = (event) => {
        const { value } = event.target;
        setImage(value);
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setpostText(value);
    };

    return (
        <div>

            {Auth.loggedIn() ? (
                <>
                    <form
                        className="flex-row justify-center justify-space-between-md align-center"
                        onSubmit={handleFormSubmit}
                    >
                        <div className="col-12 col-lg-9">
                            <input
                                type="text"
                                name="image"
                                placeholder="Enter image url..."
                                value={image}
                                className="form-input w-100"
                                style={{ lineHeight: '1.5', resize: 'vertical', border: '2px solid #5d0cff', }}
                                onChange={handlePhoto}
                            ></input>
                            <textarea
                                name="postText"
                                placeholder="Enter caption..."
                                value={postText}
                                className="form-input w-100"
                                style={{ lineHeight: '1.5', resize: 'vertical', border: '2px solid #5d0cff', }}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="col-12 col-lg-3">
                            <button className="add__post__button btn btn-block py-3" style={styles.add__post__button} type="submit">
                                Add Post
                            </button>
                        </div>
                        {error && (
                            <div className="col-12 my-3 bg-danger text-white p-3">
                                {error.message}
                            </div>
                        )}
                    </form>
                </>
            ) : (
                <p>
                    You need to be logged in to share your posts. Please{' '}
                    <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                </p>
            )}
        </div>
    );
};

export default PostForm;
