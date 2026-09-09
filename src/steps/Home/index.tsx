import React from 'react';

import { Container } from './styles';
import Move from '../../components/Move';

const Home: React.FC = () => {
  return (
    <Container>
        <Move move='paper'/>
        <Move move='scissors'/>
        <Move move='rock'/>
    </Container>
  );
}

export default Home;