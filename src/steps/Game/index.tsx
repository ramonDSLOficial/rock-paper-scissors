import React, { useEffect } from 'react';

import { Container, ResultContainer, Message, RestartBtn } from './styles';
import PlayerField from './PlayerField';
import { useGameStore } from '../../store/gameStore';
import { defaultMoves } from '../../store/store';

const Game: React.FC = () => {
	const { setSecondPlayerMove, gameState } = useGameStore();
	
	const sleep = async (sec) =>
		new Promise((resolver) => setTimeout(resolver, sec * 1000));

	const raffleSecondPlayerMove = async (): Promise<void> => {
		await sleep(1.75)
		const raffledMove =
			defaultMoves[Math.floor(Math.random() * defaultMoves.length)];
		setSecondPlayerMove(raffledMove);
	};

	useEffect(() => {
		raffleSecondPlayerMove();
	}, []);

	return (
		<Container>
			<PlayerField
				id="playerOne"
				move={gameState.firstPlayer}
				player="you picked"
			/>
			<PlayerField
				id="playerTwo"
				move={gameState.secondPlayer}
				player="the house picked"
			/>

			<ResultContainer id="result" className="">
				<Message>you lose</Message>
				<RestartBtn>play again</RestartBtn>
			</ResultContainer>
		</Container>
	);
};

export default Game;
