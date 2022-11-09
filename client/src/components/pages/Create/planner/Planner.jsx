import React from 'react';
import "./Planner.css";

export default function Planner() {
  const styles = {
    container: {
      width: '1000px',
      backgroundColor: 'white',
      height: '330px',
      display: 'flex',
      aligmItems: 'center',
      justifyContent: 'center'
    },
  }
  return (
    <div className='planner' id='planner'>
      <h1 className='header'>Planner</h1>
      <div className='container' style={styles.container}>
        <div className='box1'>Brush teeth</div>
        <div className='box2'>Get dressed</div>
        <div className='box3'>Make bed</div>
        <div className='box4'>Breakfast</div>
        <div className='box5'>Reading</div>
        <div className='box6'>Math exercise</div>
      </div>
    </div>
  );
}
