import React, { type ButtonHTMLAttributes } from 'react';

import { Container, Image } from './styles';
import type { Moves } from '../../types/types';
import { useGameStore } from '../../store/gameStore';

interface MoveProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	move?: Moves;
}

const Move: React.FC<MoveProps> = ({ move, ...props }) => {
	const { hasExtraMoves } = useGameStore();
	
	return (
		<Container $move={move} $hasExtraMoves={hasExtraMoves} {...props}>
			<Image
				$move={move}
				src={move ? `./images/icon-${move}.svg` : undefined}
				alt={move ? `throw ${move}` : ''}
				$hasExtraMoves={hasExtraMoves}
			/>
		</Container>
	);
};

export default Move;
