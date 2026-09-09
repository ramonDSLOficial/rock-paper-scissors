import React from 'react';

import { Container, ResultContainer, Message, RestartBtn } from './styles';
import PlayerField from './PlayerField';

const Game: React.FC = () => {
  return (
    <Container>
        <PlayerField move='rock' player='you picked'/>
        <PlayerField move='paper' player='the house picked'/>
        
        <ResultContainer>
            <Message>you win</Message>
            <RestartBtn>play again</RestartBtn>
        </ResultContainer>
    </Container>
  )
}

export default Game;