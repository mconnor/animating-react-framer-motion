import React, { useState } from 'react'
import styles from './Accordian.module.css'
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
    open: { opacity: 1, height: "auto"},
    closed: { opacity: 0, height: 0}
}


const Accordian = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <article>

            <h2 role="button" onClick={() => setIsOpen((prevState => !prevState))}> show stuff</h2>
            <AnimatePresence>
                {isOpen &&
                    <motion.div
                        variants = {variants}
                        className={styles.hidden}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
                            laboriosam esse ab corrupti harum voluptatum quaerat officiis laborum totam nulla error doloribus quidem tenetur tempora aliquid eum molestias ipsam nostrum!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
                            laboriosam esse ab corrupti harum voluptatum quaerat officiis laborum totam nulla error doloribus quidem tenetur tempora aliquid eum molestias ipsam nostrum!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
                            laboriosam esse ab corrupti harum voluptatum quaerat officiis laborum totam nulla error doloribus quidem tenetur tempora aliquid eum molestias ipsam nostrum!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
                            laboriosam esse ab corrupti harum voluptatum quaerat officiis laborum totam nulla error doloribus quidem tenetur tempora aliquid eum molestias ipsam nostrum!
                    </p>
                    </motion.div>
                }
            </AnimatePresence>
        </article>
    )
}

export default Accordian
