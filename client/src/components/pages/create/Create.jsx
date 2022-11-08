import React from 'react';
import { motion } from "framer-motion";



import "./create.css"

export default function Create() {
     
    return (
        <div className='contain'>
            <div className='left'>
                <h1>Bob's Morning Routine</h1>
                <textarea className='notes' placeholder='notes'><p></p></textarea>        
            </div>
            <div className='right'>
                <div className='header'>                
                    <ul>
                        <li>
                            <motion.button className='button'         
                                initial= {{ opacity:0.5 }}
                                whileHover={{
                                    scale: 1.1,
                                    borderRadius:20,
                                    x: 20,
                                    opacity:1,
                                    transition: { duration: 2 },
                                }}
                                whileTap={{ scale: 0.9 }}
                            >Planner</motion.button>
                        </li>
                        <li>
                            <motion.button className='button'         
                                initial= {{ opacity:0.5 }}
                                whileHover={{
                                    scale: 1.1,
                                    borderRadius:20,
                                    x: 20,
                                    opacity:1,
                                    transition: { duration: 2 },
                                }}
                                whileTap={{ scale: 0.9 }}
                            >Yes or No</motion.button>
                        </li>
                        <li>
                            <motion.button className='button'         
                                initial= {{ opacity:0.5 }}
                                whileHover={{
                                    scale: 1.1,
                                    borderRadius:20,
                                    x: 20,
                                    opacity:1,
                                    transition: { duration: 2 },
                                }}
                                whileTap={{ scale: 0.9 }}
                            >Contact Form</motion.button>
                        </li>
                        <li>
                            <motion.button className='button'         
                                initial= {{ opacity:0.5 }}
                                whileHover={{
                                    scale: 1.1,
                                    borderRadius:20,
                                    x: 20,
                                    opacity:1,
                                    transition: { duration: 2 },
                                }}
                                whileTap={{ scale: 0.9 }}
                            >Photos</motion.button>
                        </li>
                        <li>
                            <motion.button className='button'         
                                initial= {{ opacity:0.5 }}
                                whileHover={{
                                    scale: 1.1,
                                    borderRadius:20,
                                    x: 20,
                                    opacity:1,
                                    transition: { duration: 2 },
                                }}
                                whileTap={{ scale: 0.9 }}
                            >Lesson Plan</motion.button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      );
    }
