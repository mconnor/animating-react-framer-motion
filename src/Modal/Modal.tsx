import React from 'react'
import styled from 'styled-components'
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

    background-color:white;
    border: 1px black solid;
    border-radius: 8px;
    padding-top: 20px;
    padding-left: 20px;
`;

const Headline = styled.h1`
    border: 1px black solid;
    margin-top:0;
`;


type Props = {
    closeMe: () => void;
}

const Modal = ({ closeMe }: Props) => {
    return (
        <ModalDiv>
            <CloseBtn close={closeMe} />
            <Headline>Modal</Headline>
        </ModalDiv>

    )
}

export default Modal
