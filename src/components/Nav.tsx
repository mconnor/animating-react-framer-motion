/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components'

const variants = {
    open: { x: 0 },
    closed: { x: "-100%" },

}
type Props = {
    isNavOpen: boolean;
    setIsNavOpen: (b: boolean) => void;
}
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
                <li><a href="#">one</a></li>
                <li><a href="#">two</a></li>
                <li><a href="#">three</a></li>
                <li><a href="#">four</a></li>
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
        margin: 0;
        font-size: 2rem;
        a {
            color: white;
        }
    }
`;

export default Nav
