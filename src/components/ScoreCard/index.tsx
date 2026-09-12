import React from 'react';

import { Container, ScoreText, ScoreValue } from './styles';

const ScoreCard: React.FC = () => {
	return (
		<Container>
			<ScoreText>score</ScoreText>
			<ScoreValue>11</ScoreValue>
		</Container>
	);
};

export default ScoreCard;
