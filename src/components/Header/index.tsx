import React from 'react';

import { Container, LogoTitle } from './styles';
import ScoreCard from '../ScoreCard';

const Header: React.FC = () => {
	return (
		<Container>
			<LogoTitle>
				<img src="./images/logo.svg" alt="rock paper scissors game" />
			</LogoTitle>

            <ScoreCard />
		</Container>
	);
};

export default Header;
