/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components'

const variants = {
    open: { x: 0 },
    closed: {
        x: "-100%",
        transition: {
            delay: .2
        }
    },

}

const liVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            delay: .2
        }
    },
    closed: { y: -20, opacity: 0 },
}

type Props = {
    isNavOpen: boolean;
    setIsNavOpen: (b: boolean) => void;
}

const arr = ['one', 'two', 'three', 'four']

const Nav = ({ isNavOpen, setIsNavOpen }: Props) => {
    return (

        <MenuNav
            variants={variants}
            initial='closed'
            animate={isNavOpen ? 'open' : 'closed'}
            transition={{ damping: 300 }}
        >
            <button onClick={prevState => setIsNavOpen(false)}>close</button>


            <ul>
                {
                    arr.map(item => (
                        <motion.li variants={liVariants} key={item}><a href="#">{item}</a></motion.li>
                    ))
                }
            </ul>
        </MenuNav>

    )
}


const MenuNav = styled(motion.nav)`
    position: fixed;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    padding: 40px;
    background: var(--black);
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    li {
        padding: 0;
        margin: 0 0 1rem;
        font-size: 2rem;
        a {
            color: white;
            text-decoration: none;
            border-bottom: 2px transparent solid;
            transition: 0.3s ease border;
        }
        &:hover {
            border-bottom: 2px var(--blue) solid;
        }
    }
`;

export default Nav
