import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion';
import CloseBtn from './CloseBtn'


const ModalDiv = styled.div`
    z-index: 2;

    height: 50%;
    width: 95%;
    max-width: 500px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`;



type Props = {
    closeMe: () => void;
    isModalToggled: boolean;
    children?: any;
}

const Modal = ({ isModalToggled, closeMe, children }: Props) => {
    return (
        <AnimatePresence>
           {isModalToggled && 
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        exit={{ y: 30 }}
                    >
                        <ModalDiv>
                            <CloseBtn close={closeMe} />
                            {children}
                        </ModalDiv>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>

    )
}

export default Modal
