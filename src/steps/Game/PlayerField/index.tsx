import React from 'react';

import { Container, PlayerText } from './styles';
import Move from '../../../components/Move';
import type { Moves } from '../../../types/types';

interface PlayerFieldProps {
	player: string;
	move?: Moves;
	id: string
}

const PlayerField: React.FC<PlayerFieldProps> = ({ id, player, move }) => {
	return (
		<Container id={id}>
			<Move move={move} />
			<PlayerText>{ player }</PlayerText>
		</Container>
	);
};

export default PlayerField;
