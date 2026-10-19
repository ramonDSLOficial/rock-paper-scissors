import React, { useEffect, useState } from 'react';

import { Container, ResultContainer, Message, RestartBtn } from './styles';
import PlayerField from './PlayerField';
import { useGameStore } from '../../store/gameStore';
import { defaultMoves } from '../../store/store';
import type { Moves, Result } from '../../types/types';

type Rules = {
	rock: Moves[];
	paper: Moves[];
	scissors: Moves[];
	lizard: Moves[];
	spock: Moves[];
};

const Game: React.FC = () => {
	const {
		gameState,
		setSecondPlayerMove,
		changeScoreValue,
		restartGame,
		isMultiplayer,
	} = useGameStore();
	const [result, setResult] = useState<Result | null>(null);
	const [resultMessage, setResultMessage] = useState<string | null>(null);

	const rules: Rules = {
		rock: ['scissors', 'lizard'],
		paper: ['rock', 'spock'],
		scissors: ['paper', 'lizard'],
		lizard: ['spock', 'paper'],
		spock: ['rock', 'scissors'],
	};

	const sleep = async (sec: number) =>
		new Promise((resolver) => setTimeout(resolver, sec * 1000));

	const raffleSecondPlayerMove = async (): Promise<void> => {
		await sleep(1.75);
		const raffledMove =
			defaultMoves[Math.floor(Math.random() * defaultMoves.length)];
		setSecondPlayerMove(raffledMove);
	};

	const checkResult = async (): Promise<void> => {
		await sleep(3.65);

		const result = checkWinner();

		proclaimWinner(result);
	};

	const checkWinner = (): Result => {
		const firstPlayerWin = rules[gameState.firstPlayer].some(
			(move) => move === gameState.secondPlayer
		);
		const secondPlayerWin = rules[gameState.secondPlayer].some(
			(move) => move === gameState.firstPlayer
		);

		return firstPlayerWin
			? 'firstPlayer'
			: secondPlayerWin
			? 'secondPlayer'
			: 'draw';
	};

	const proclaimWinner = async (result: Result): Promise<void> => {
		setResult(result);
		setResultMessage(() => {
			if (!isMultiplayer) {
				return (
					'you ' +
					(result === 'firstPlayer'
						? 'win'
						: result === 'secondPlayer'
						? 'lose'
						: 'draw')
				);
			}

			return result === 'firstPlayer'
				? 'p1 win'
				: result === 'secondPlayer'
				? 'p2 win'
				: 'You draw';
		});
		await sleep(1);

		changeScoreValue(result);
	};

	useEffect(() => {
		if (!gameState.secondPlayer && !isMultiplayer) {
			raffleSecondPlayerMove();
			return;
		}

		checkResult();
	}, [gameState.secondPlayer]);

	return (
		<Container className={result ? `showResult` : undefined}>
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
				<Message>{resultMessage}</Message>
				<RestartBtn onClick={restartGame}>play again</RestartBtn>
			</ResultContainer>
		</Container>
	);
};

export default Game;
