import React, { useEffect, useState } from 'react';

import { Container, ResultContainer, Message, RestartBtn } from './styles';
import PlayerField from './PlayerField';
import { useGameStore } from '../../store/gameStore';
import { defaultMoves } from '../../store/store';
import type { Moves, Result } from '../../types/types';

type Rules = {
	'rock': Moves,
	'paper': Moves,
	'scissors': Moves,
}

const Game: React.FC = () => {
	const { gameState, setSecondPlayerMove, changeScoreValue, restartGame } = useGameStore();
	const [result, setResult] = useState<Result | null>(null)

	const rules: Rules = {
		'rock': 'scissors',
		'paper': 'rock',
		'scissors': 'paper'
	}
	
	const sleep = async (sec) =>
		new Promise((resolver) => setTimeout(resolver, sec * 1000));

	const raffleSecondPlayerMove = async (): Promise<void> => {
		await sleep(1.75)
		const raffledMove =
			defaultMoves[Math.floor(Math.random() * defaultMoves.length)];
		setSecondPlayerMove(raffledMove);
	};

	const checkResult = async (): Promise<void> => {
		await sleep(3.65)

		const firstPlayerWin = rules[gameState.firstPlayer] === gameState.secondPlayer
		const secondPlayerWin = rules[gameState.secondPlayer] === gameState.firstPlayer

		if (firstPlayerWin) proclaimResult('win')
		else if (secondPlayerWin) proclaimResult('lose')
		else proclaimResult('draw')
	}

	const proclaimResult = async (result: Result): Promise<void> => {
		setResult(result)
		await sleep(1)

		const operation = result === 'win' ? 1 : result === 'lose' ? -1 : 0
		changeScoreValue(operation)
	}

	useEffect(() => {
		if (!gameState.secondPlayer) {
			raffleSecondPlayerMove()
			return 
		}

		checkResult()
	}, [gameState.secondPlayer]);

	return (
		<Container className={result ? `showResult` : undefined }>
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

			<ResultContainer id="result">
				<Message>you {result}</Message>
				<RestartBtn onClick={restartGame}>play again</RestartBtn>
			</ResultContainer>
		</Container>
	);
};

export default Game;
