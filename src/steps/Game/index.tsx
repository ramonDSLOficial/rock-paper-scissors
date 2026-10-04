import React from 'react';

import { Container, ResultContainer, Message, RestartBtn } from './styles';
import PlayerField from './PlayerField';

const Game: React.FC = () => {
  return (
    <Container>
        <PlayerField id='playerOne' move='scissors' player='you picked'/>
        <PlayerField id='playerTwo' move='paper' player='the house picked'/>
        
        <ResultContainer id='result' className=''>
            <Message>you lose</Message>
            <RestartBtn>play again</RestartBtn>
        </ResultContainer>
    </Container>
  )
}

export default Game;