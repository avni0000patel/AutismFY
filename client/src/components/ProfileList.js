import React from 'react';

const ProfileList = ({ profiles, title }) => {
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
        post__caption: {
            fontWeight: 'normal',
            padding: '20px 15px',
            color: 'black',
        }
    }
    if (!profiles.length) {
        return <h3>No Posts Yet</h3>;
    }

    return (
        <div>
            <h3 className="text-primary">{title}</h3>
            <div className="flex-row justify-space-between my-4">
                {profiles &&
                    profiles.map((profile) => (
                        <div key={profile._id} className="col-12">
                            <div className="post" style={styles.post}>
                                <div className="post__header" style={styles.post__header}>
                                    {/* <Avatar className="post__avatar" style={styles.post__avatar} alt="avni0000patel" src="/static/images/avatar/1.jpg"></Avatar> */}
                                    <h3>{profile.name}</h3>
                                </div>
                                <img className="post__image" style={styles.post__image} src={profile.image} alt="postimage"></img>
                                <div className="post__caption" style={styles.post__caption}><strong>{profile.name} </strong>{profile.captions}</div>
                            </div >
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ProfileList;
