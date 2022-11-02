import React from 'react';

function Home({ username, caption, imageURL }) {
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
    return (
        <div className="post" style={styles.post}>
            <div className="post__header" style={styles.post__header}>
                {/* <Avatar className="post__avatar" style={styles.post__avatar} alt="avni0000patel" src="/static/images/avatar/1.jpg"></Avatar> */}
                <h3>{username}</h3>
            </div>
            <img className="post__image" style={styles.post__image} src={imageURL} alt="postimage"></img>
            <h4 className="post__text" style={styles.post__text}><strong>{username} </strong>{caption}</h4>
        </div >
    )
}

export default Home;