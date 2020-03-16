import React from 'react'
import styled from 'styled-components'
import CloseBtn from './CloseBtn'


const ModalDiv = styled.div`
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    background-color:white;
    border: 1px black solid;
    border-radius: 8px;
    
`;


type Props = {
    closeMe: () => void;
}

const Modal = ({ closeMe }: Props) => {
    return (


        <ModalDiv>

            <CloseBtn close={closeMe} />
            <h1>Modal</h1>
        </ModalDiv>

    )
}

export default Modal
