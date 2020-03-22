/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link, useLocation } from "react-router-dom";
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Container, Header } from './Elements';
import AboutPage from './AboutPage'
import HomePage from './HomePage';
import Menu from './Menu';
import Nav from './Nav';
import './App.css';



type Props = { title: string };
type State = {
    value: number,
};

function App({ title }: Props) {

    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
const location = useLocation()

    const x = useMotionValue(0);
    const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])

    return (
        <motion.div>
            <Header>

                <Menu onClick={() => setIsNavOpen(true)} />
                <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
                <h1>Header</h1>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>

            </Header>

            <Container>
                <h2>super cool</h2>
                <AnimatePresence exitBeforeEnter>
                    <Switch  location={location} key={location.pathname}>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/about" component={AboutPage} />
                    </Switch>
                </AnimatePresence>
            </Container>
        </motion.div>
    );
}

const AppWrapper = ({ title }: Props) => (
    <BrowserRouter>
        <App title={title} />
    </BrowserRouter>
)

export default AppWrapper;
