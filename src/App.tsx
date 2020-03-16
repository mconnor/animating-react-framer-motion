/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal/Modal';
import { Card, CardGrid, Container, Header } from './Elements';
import './App.css';
import Menu from './Menu';
import blue from './blue.png';
import purp from './purp.png';
import black from './black.png';
import green from './green.png';


type Props = { title: string };
type State = {
    value: number,
};

function App({ title }: Props) {
    const [value, setValue] = useState<string>('0')
    const [isModal, setModal] = useState<boolean>(false)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Header>
                <Menu />
                <h1>Header</h1>
            </Header>

            <Container>
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
                    
                    <Card style={{ background: 'var(--blue)' }}>
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
