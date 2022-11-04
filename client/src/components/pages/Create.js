import React from 'react';

export default function Create() {
    const styles = {
        container: {
            backgroundColor: 'powderblue',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',  
            position:"fixed",   
            width: "100%",
            height: '100%',
            minHeight: '100vh',           

        left:  {
            color:"black",
            flex: 20,  
        },
        right:  {
            color:"black",
            flex: 5,
            justifyContent: 'space-between',           
        }   
        },
        notes: {
            width: "700px",
            height: "400px",
        },
        li:{
            width: "200px",
            height: "60px",
            margin: "5px",
            fontSize: "20px",
        },
   }
    return (
        <div style={styles.container}>
            <div style={styles.left}>
                <h1>Bob's Morning Routine</h1>
                <textarea style={styles.notes} placeholder='notes'><p></p></textarea>        
            </div>
            <div style={styles.right}>
                <div className='header'>
                    <ul>
                        <li><button style={styles.li} type='submit'>Planner</button></li>
                        <li><button style={styles.li} type='submit'>Yes or No</button></li>
                        <li><button style={styles.li} type='submit'>Contact Form</button></li>
                        <li><button style={styles.li} type='submit'>Photos</button></li>
                        <li><button style={styles.li} type='submit'>Lesson Plan</button></li>
                    </ul>
                </div>
            </div>
        </div>
      );
    }
