import React from 'react';

import { Container, PlayerText } from './styles';
import Move from '../../../components/Move';
import type { Moves } from '../../../types/types';

interface PlayerFieldProps {
	player: string;
	move?: Moves;
}

const PlayerField: React.FC<PlayerFieldProps> = ({ player, move }) => {
	return (
		<Container>
			<Move move={move} />
			<PlayerText>{ player }</PlayerText>
		</Container>
	);
};

export default PlayerField;
