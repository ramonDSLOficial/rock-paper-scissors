import React from 'react';

import { Container, LogoTitle } from './styles';
import ScoreCard from '../ScoreCard';
import { useGameStore } from '../../store/gameStore';

const Header: React.FC = () => {
	const { hasExtraMoves, isMultiplayer, score } = useGameStore();
	const gameMode = !hasExtraMoves ? 'normal' : 'bonus';
	
	const logo = {
		normal: {
			img: "./images/logo.svg",
			alt: `rock paper scissors game`,
		},
		bonus: {
			img: "./images/logo-bonus.svg",
			alt: `rock paper scissors lizard spock game`,
		},
	};
	
	return (
		<Container>
			{ isMultiplayer && <ScoreCard label='p1 score' score={score} />}
			
			<LogoTitle>
				<img src={logo[gameMode].img} alt={logo[gameMode].alt} />
			</LogoTitle>

            <ScoreCard label={isMultiplayer ? 'p2 score' : 'score'} score={score} />
		</Container>
	);
};

export default Header;
