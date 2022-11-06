import React from 'react';

const ProfileList = ({ profiles, title }) => {
    if (!profiles.length) {
        return <h3>No Posts Yet</h3>;
    }

    return (
        <div>
            <h3 className="text-primary">{title}</h3>
            <div className="flex-row justify-space-between my-4">
                {profiles &&
                    profiles.map((profile) => (
                        <div key={profile._id} className="col-12 col-xl-6">
                            <div className="card mb-3">
                                <h4 className="card-header bg-dark text-light p-2 m-0">
                                    {profile.name}
                                    <br />
                                </h4>
                                <h4 className="card-header bg-dark text-light p-2 m-0">
                                    {profile.captions}
                                    <br />
                                </h4>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ProfileList;
