/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './components/Modal/Modal';
import Accordian from './components/accordian/Accordian';
import { Card, CardGrid, Container, Header } from './Elements';
import './App.css';
import Menu from './Menu';
import blue from './blue.png';
import purp from './purp.png';
import black from './black.png';
import green from './green.png';
import Nav from './components/Nav';


type Props = { title: string };
type State = {
    value: number,
};

function App({ title }: Props) {
    const [value, setValue] = useState<string>('0')
    const [isModal, setModal] = useState<boolean>(false)
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

    return (
        <motion.div

            animate={{ opacity: [0, 1] }}
            transition={{ duration: .5, time: [0, 1] }}
        >
            <Header>

                <Menu onClick={() => setIsNavOpen(true)} />
                <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
                <h1>Header</h1>
            </Header>

            <Container>
                <Accordian />
                <Modal isModalToggled={isModal}
                    closeMe={() => setModal(false)}
                >
                    <Card style={{ background: 'var(--purp)' }}>
                        <h3>Some card</h3>
                        <img src={purp} />
                    </Card>
                </Modal>
                <h2>cool</h2>
                <input type="range" min="-100" max="100"
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <button onClick={() => setModal(!isModal)}>modal</button>
                <CardGrid>

                    <Card style={{ background: 'var(--blue)' }}
                        whileHover={{ scale: [1.02, 0.8, 1.2] }}
                        whileTap={{ background: 'red' }}>
                        <h3>Some card</h3>
                        <img src={blue} />
                    </Card>
                    <Card style={{ background: 'var(--black)' }}>
                        <h3>Some card</h3>
                        <img src={black} />
                    </Card>
                    <Card style={{ background: 'var(--green)' }}>
                        <h3>Some card</h3>
                        <img src={green} />
                    </Card>
                </CardGrid>
            </Container>
        </motion.div>
    );
}

export default App;
