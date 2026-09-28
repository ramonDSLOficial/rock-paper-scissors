import React from 'react';

import { Container, ResultContainer, Message, RestartBtn } from './styles';
import PlayerField from './PlayerField';

const Game: React.FC = () => {
  return (
    <Container>
        <PlayerField move='scissors' player='you picked'/>
        <PlayerField player='the house picked'/>
        
        <ResultContainer id='result' className=''>
            <Message>you lose</Message>
            <RestartBtn>play again</RestartBtn>
        </ResultContainer>
    </Container>
  )
}

export default Game;