import React, { useState } from 'react'
import styled from 'styled-components'
import styles from './Accordian.module.css'
import { motion, AnimatePresence } from 'framer-motion';

const MainDiv = styled.div`
    background-color: gray;
`;

const Copy = styled.div`
    background-color: white;s
`;

const Headline = styled.div`
    background-color: gray;
`;


const Accordian = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <article>

            <h2 role="button" onClick={() => setIsOpen((prevState => !prevState))}> show stuff</h2>
            <AnimatePresence>
                {isOpen &&
                    <motion.div
                        className={styles.hidden}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
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
