import React from 'react'
import { motion } from 'framer-motion';
import Squares from './Squares'

const variants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: {
        opacity: 0,
        y: 100,
        transition: {
            delay: .5,
        }
    }
}

const h2Variants = {
    initial: { opacity: 0, y: -100 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: .5,
        }
    },
    exit: { opacity: 0, y: 100 }
}

const HomePage = () => {
    return (
        <motion.div
            variants={variants}
            initial='initial'
            animate='animate'
            exit='exit'
        >
            <motion.h2
                variants={h2Variants}
                initial='initial'
                animate='animate'
                exit='exit'
            >About</motion.h2>
            <Squares />
        </motion.div>
    )
}

export default HomePage
