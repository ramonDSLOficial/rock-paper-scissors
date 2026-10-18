import React from 'react';

import { Container, ScoreText, ScoreValue } from './styles';
import { useGameStore } from '../../store/gameStore';

interface ScoreCardProps {
	label: string | React.JSX.Element;
	score: number;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ label, score }) => {
	const { isMultiplayer } = useGameStore();

	return (
		<Container className={isMultiplayer ? 'multiplayer' : undefined}>
			<ScoreText>{label}</ScoreText>
			<ScoreValue>{score}</ScoreValue>
		</Container>
	);
};

export default ScoreCard;
