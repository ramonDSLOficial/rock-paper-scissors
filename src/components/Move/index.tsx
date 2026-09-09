import React from 'react';

import { Container, Image } from './styles';
import type { Moves } from '../../types/types';

interface MoveProps {
	move: Moves;
}

const Move: React.FC<MoveProps> = ({ move }) => {
	return (
		<Container>
			<Image src={`./images/icon-${move}.svg`} alt={`throw ${move}`} />
		</Container>
	);
};

export default Move;
