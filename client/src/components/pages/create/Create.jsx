import React from 'react';
import { motion } from "framer-motion/dist/framer-motion";
import Planner from "./planner/Planner";

import "./Create.css"

export default function Create({ currentPage, handlePageChange }) {

    return (
        <div className='section'>
            <div className='contain'>
                <div className='left'>
                    <h1>Bob's Morning Routine</h1>
                    <textarea className='notes' placeholder='notes'><p></p></textarea>
                </div>
                <div className='right'>
                    <ul>
                        <li><motion.button className='button'
                            initial={{ opacity: 0.5 }}
                            whileHover={{ scale: 1.1, borderRadius: 20, x: 20, opacity: 1, transition: { duration: 2 } }}
                            whileTap={{ scale: 0.9 }}
                        ><a href='#planner'
                            onClick={() => handlePageChange("Planner")}
                            className={
                                currentPage === "Planner" ? "nav-link active" : "nav-link"
                            }
                        >Planner</a></motion.button>
                        </li>
                        <li><motion.button className='button'
                            initial={{ opacity: 0.5 }}
                            whileHover={{ scale: 1.1, borderRadius: 20, x: 20, opacity: 1, transition: { duration: 2 } }}
                            whileTap={{ scale: 0.9 }} >Yes or No</motion.button>
                        </li>
                        <li><motion.button className='button'
                            initial={{ opacity: 0.5 }}
                            whileHover={{ scale: 1.1, borderRadius: 20, x: 20, opacity: 1, transition: { duration: 2 } }}
                            whileTap={{ scale: 0.9 }} >Contact Form</motion.button>
                        </li>
                        <li><motion.button className='button'
                            initial={{ opacity: 0.5 }}
                            whileHover={{ scale: 1.1, borderRadius: 20, x: 20, opacity: 1, transition: { duration: 2 } }}
                            whileTap={{ scale: 0.9 }} >Photos</motion.button>
                        </li>
                        <li><motion.button className='button'
                            initial={{ opacity: 0.5 }}
                            whileHover={{ scale: 1.1, borderRadius: 20, x: 20, opacity: 1, transition: { duration: 2 } }}
                            whileTap={{ scale: 0.9 }} >Lesson Plan</motion.button>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Planner />
            </div>
        </div>
    );
}
