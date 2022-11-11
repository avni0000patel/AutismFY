import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

//import PostForm from '../../PostForm';
import PostList from '../../PostList';

import { QUERY_USER, QUERY_ME } from '../../../utils/queries';

import Auth from '../../../utils/auth';
import ProfileContainer from './ProfileContainer';

const Profile = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    });

    const user = data?.me || data?.user || {};
    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to="/me" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this. Use the navigation links above to
                sign up or log in!
            </h4>
        );
    } else {
        console.log(user)
    }

    return (
        <div>
            <ProfileContainer user={user ? user : null} />
            <div >
                <div className="col-12 col-md-10 mb-5">
                    <PostList
                        posts={user.posts}
                        title={`${user.username}'s posts...`}
                        showTitle={false}
                        showUsername={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;
