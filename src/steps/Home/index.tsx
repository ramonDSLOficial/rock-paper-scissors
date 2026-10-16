import React from 'react';

import { Container } from './styles';
import { defaultMoves, moves } from '../../store/store';
import Move from '../../components/Move';
import { useGameStore } from '../../store/gameStore';
import type { Moves } from '../../types/types';

const Home: React.FC = () => {
	const { setFirstPlayerMove, startGame, hasExtraMoves } = useGameStore();
	const availableMoves = !hasExtraMoves ? defaultMoves : moves

	const selectMove = (e: React.MouseEvent) => {
		const currentTarget = e.currentTarget
		const move = currentTarget.id as Moves
		
		setFirstPlayerMove(move);
		startGame()
	}
	
	return (
		<Container $hasExtraMoves={hasExtraMoves} >
			{availableMoves.map((move) => {
				return <Move key={move} move={move} id={move} onClick={selectMove} />;
			})}
		</Container>
	);
};

export default Home;
