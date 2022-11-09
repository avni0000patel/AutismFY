import React from 'react';
import "./planner.css"

export default function Planner() {
  return (
    <div className='planner' id='planner'>
      <h1 className='header'>Planner</h1>
      <div className='container'>
        <div className='box1'>Brush teeth</div>
        <div className='box2'>Get dressed</div>
        <div className='box3'>Make bad</div>
        <div className='box4'>Breakfast</div>
        <div className='box5'>Reading</div>
        <div className='box6'>Math exercise</div>
      </div>
    </div>
  );
}
