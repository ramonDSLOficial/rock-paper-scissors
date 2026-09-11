import React, { type ButtonHTMLAttributes } from 'react';

import { Container, Image } from './styles';
import type { Moves } from '../../types/types';

interface MoveProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	move?: Moves;
}

const Move: React.FC<MoveProps> = ({ move, ...props }) => {
	return (
		<Container $move={move} {...props}>
			<Image
				$move={move}
				src={move ? `./images/icon-${move}.svg` : ''}
				alt={move ? `throw ${move}` : ''}
			/>
		</Container>
	);
};

export default Move;
