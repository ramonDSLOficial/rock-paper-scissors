import React, { useId, type HTMLAttributes } from 'react';

import { Container, PlayerText } from './styles';
import Move from '../../../components/Move';
import type { Moves } from '../../../types/types';

interface PlayerFieldProps extends HTMLAttributes<HTMLDivElement> {
	player: string;
	move?: Moves;
	id: string;
	className?: string;
}

const PlayerField: React.FC<PlayerFieldProps> = ({
	player,
	move,
	id,
	className,
	...props
}) => {
	const playerId = useId();

	return (
		<Container aria-labelledby={playerId} role="group" id={id} {...props}>
			<Move className={className} move={move} />
			<PlayerText id={playerId}>{player}</PlayerText>
		</Container>
	);
};

export default PlayerField;
