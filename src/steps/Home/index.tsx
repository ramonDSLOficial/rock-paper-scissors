import React, { useEffect } from 'react';

import { Container } from './styles';
import { defaultMoves, moves } from '../../store/store';
import Move from '../../components/Move';
import { useGameStore } from '../../store/gameStore';
import type { Moves } from '../../types/types';

const Home: React.FC = () => {
	const {
		setFirstPlayerMove,
		setSecondPlayerMove,
		startGame,
		hasExtraMoves,
		isMultiplayer,
		gameState,
	} = useGameStore();
	const availableMoves = !hasExtraMoves ? defaultMoves : moves;

	const selectMove = (e: React.MouseEvent) => {
		const currentTarget = e.currentTarget;
		const move = currentTarget.id as Moves;

		if (!isMultiplayer) {
			setFirstPlayerMove(move);
			startGame();
		} else {
			gameState.firstPlayer
				? setSecondPlayerMove(move)
				: setFirstPlayerMove(move);
		}
	};

	useEffect(() => {
		if (gameState.firstPlayer && gameState.secondPlayer) startGame();
	}, [gameState.firstPlayer, gameState.secondPlayer]);

	return (
		<Container $hasExtraMoves={hasExtraMoves}>
			{availableMoves.map((move) => {
				return (
					<Move key={move} move={move} id={move} onClick={selectMove} />
				);
			})}
		</Container>
	);
};

export default Home;
