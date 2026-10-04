import React from 'react';

import { Container, PlayerText } from './styles';
import Move from '../../../components/Move';
import type { Moves } from '../../../types/types';

interface PlayerFieldProps {
	player: string;
	move?: Moves;
	id: string,
	className?: string
}

const PlayerField: React.FC<PlayerFieldProps> = ({ player, move, id, className }) => {
	return (
		<Container id={id}>
			<Move className={className} move={move} />
			<PlayerText>{ player }</PlayerText>
		</Container>
	);
};

export default PlayerField;
