import React from 'react'
import { motion } from 'framer-motion';
import Squares from './Squares'

const HomePage = () => {
    return (
        <motion.div
        initial={{ opacity: 0 , y: -100}}
        animate={{ opacity: 1, y:0 }}
        exit={{ opacity: 0 ,y:100}}
            >
 
        
            <h2>About</h2>
            <Squares />
        </motion.div>
    )
}

export default HomePage
