import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaRegWindowClose } from 'react-icons/fa';

const CloseButtonContainer = styled.button`
 position: absolute;
  top: 6px;
  right: 15px;
  border: 0;
  margin: 0;
  padding: 0;
  background-color: rgba(255, 255, 255, 0);
`;

type Props = {
    close: () => void;
}

const CloseBtn = ({ close }: Props) => {
    return (
        <CloseButtonContainer role="button" onClick={close}>
            <IconContext.Provider value={{ color: '#FF3D57', size: '1em' }}>
                <div>
                    <FaRegWindowClose />
                </div>
            </IconContext.Provider>
        </CloseButtonContainer>
    );
};


export default CloseBtn;
