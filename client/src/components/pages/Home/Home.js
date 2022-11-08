import React from 'react';
import { useQuery } from '@apollo/client';

import PostList from './PostList';

import { QUERY_POSTS } from '../../../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];
    console.log(posts);
    return (
        <main>
            <div className="flex-row justify-center">

                <div className="col-12 my-5">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <PostList
                            posts={posts}
                        />
                    )}
                </div>
            </div>
        </main>
    );
};

export default Home;
