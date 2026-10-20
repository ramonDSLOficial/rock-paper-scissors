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
		const raffledMove =
			defaultMoves[Math.floor(Math.random() * defaultMoves.length)];
		setSecondPlayerMove(raffledMove);
	};

	const checkWinner = (): Result => {
		const { firstPlayer, secondPlayer } = useGameStore.getState().gameState;

		const firstPlayerWin = rules[firstPlayer].some(
			(move) => move === secondPlayer
		);
		const secondPlayerWin = rules[secondPlayer].some(
			(move) => move === firstPlayer
		);

		return firstPlayerWin
			? 'firstPlayer'
			: secondPlayerWin
			? 'secondPlayer'
			: 'draw';
	};

	const proclaimWinner = async (result: Result): Promise<void> => {
		setResult(result);
		setResultMessage(getMessage(result));
		await sleep(1);

		changeScoreValue(result);
	};

	const getMessage = (result: Result): string => {
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
	};

	useEffect(() => {
		let cancelled = false;

		const run = async (): Promise<void> => {
			if (!gameState.secondPlayer && !isMultiplayer) {
				await sleep(1.75);
				if (cancelled) return;
				raffleSecondPlayerMove();
				return;
			}

			const checkResult = async (): Promise<void> => {
				await sleep(3.65);
				if (cancelled) return;

				const result = checkWinner();

				proclaimWinner(result);
			};

			checkResult();
		};

		run();

		return () => {
			cancelled = true;
		};
	}, [gameState.secondPlayer]);

	return (
		<Container role="group" className={result ? `showResult` : undefined}>
			<PlayerField
				id="playerOne"
				move={gameState.firstPlayer}
				player={!isMultiplayer ? 'you picked' : 'Player 1 picked'}
			/>
			<PlayerField
				id="playerTwo"
				aria-live={!isMultiplayer ? 'polite' : undefined}
				aria-atomic
				move={gameState.secondPlayer}
				player={!isMultiplayer ? 'the house picked' : 'Player 2 picked'}
			/>

			<ResultContainer
				id="result"
				aria-labelledby="message"
				aria-live="polite"
				aria-atomic
			>
				<Message id="message">{resultMessage}</Message>
				<RestartBtn title="play again" onClick={restartGame}>
					play again
				</RestartBtn>
			</ResultContainer>
		</Container>
	);
};

export default Game;
