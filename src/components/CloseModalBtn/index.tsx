import React, { type ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

const CloseModalBtn: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ title, onClick }) => {
  return (
    <Container title={title} onClick={onClick}>
        <img src="./images/icon-close.svg" alt="" />
    </Container>
  );
}

export default CloseModalBtn;