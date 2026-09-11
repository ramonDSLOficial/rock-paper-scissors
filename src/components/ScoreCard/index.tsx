import React from 'react';

import { Container, textT2, ScoreValue } from './styles';

const ScoreCard: React.FC = () => {
	return (
		<Container>
			<textT2>score</textT2>
			<ScoreValue>11</ScoreValue>
		</Container>
	);
};

export default ScoreCard;
