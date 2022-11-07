import React from 'react';
import Avatar from '@mui/material/avatar';

const ProfileList = ({ profiles }) => {
    const styles = {
        post: {
            backgroundColor: 'white',
            border: '1px solid lightgray',
            maxWidth: '700px',
            marginBottom: '50px',
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
        }
    }
    if (!profiles.length) {
        return <h3>No Posts Yet</h3>;
    }

    return (
        <div>
            {profiles &&
                profiles.map((profile) => (
                    <div key={profile._id} className="post card col-12" style={styles.post}>
                        <div className="post__header card-title" style={styles.post__header}>
                            <Avatar className="post__avatar" style={styles.post__avatar} alt={profile.name} src={profile.avatar}></Avatar>
                            <h3>{profile.name}</h3>
                        </div>
                        <img className="post__image card-text" style={styles.post__image} src={profile.image} alt="postimage"></img>
                        <div className="post__caption" style={styles.post__caption}><strong>{profile.name} </strong>{profile.captions}</div>
                    </div >
                ))
            }
        </div >
    );
};

export default ProfileList;
