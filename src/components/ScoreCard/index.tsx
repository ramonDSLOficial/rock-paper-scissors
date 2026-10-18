import React from 'react';

import { Container, ScoreText, ScoreValue } from './styles';

interface ScoreCardProps {
	label: string;
	score: number
}

const ScoreCard: React.FC<ScoreCardProps> = ({ label, score }) => {
	return (
		<Container>
			<ScoreText>{label}</ScoreText>
			<ScoreValue>{score}</ScoreValue>
		</Container>
	);
};

export default ScoreCard;
