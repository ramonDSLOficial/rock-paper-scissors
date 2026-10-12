import React, { type HtmlHTMLAttributes } from 'react';

import { Container } from './styles';

const ButtonsFooter: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <Container>{ children }</Container>
  );
}

export default ButtonsFooter;