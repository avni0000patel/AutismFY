import React from 'react';

import PostForm from '../../../components/PostForm';

const Post = () => {

    return (
        <main>
            <div className="flex-row justify-center">
                <div
                    className="col-12 col-md-10 mb-3 p-3"
                >
                    <PostForm />
                </div>
            </div>
        </main>
    );
};

export default Post;
