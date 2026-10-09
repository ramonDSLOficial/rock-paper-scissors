import React from 'react';

import { Container, ScoreText, ScoreValue } from './styles';
import { useGameStore } from '../../store/gameStore';

const ScoreCard: React.FC = () => {
	const { score } = useGameStore()
	
	return (
		<Container>
			<ScoreText>score</ScoreText>
			<ScoreValue>{score}</ScoreValue>
		</Container>
	);
};

export default ScoreCard;
