import React from 'react';
import { useQuery } from '@apollo/client';

import ProfileList from './ProfileList';

import { QUERY_PROFILES } from '../../../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_PROFILES);
    const profiles = data?.profiles || [];
    console.log(profiles);
    return (
        <main>
            <div className="flex-row justify-center">

                <div className="col-12 my-5">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <ProfileList
                            profiles={profiles}
                        />
                    )}
                </div>
            </div>
        </main>
    );
};

export default Home;
