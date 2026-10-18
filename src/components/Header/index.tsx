import React from 'react';

import { Container, LogoTitle } from './styles';
import ScoreCard from '../ScoreCard';
import { useGameStore } from '../../store/gameStore';

const Header: React.FC = () => {
	const { hasExtraMoves, isMultiplayer, score } = useGameStore();
	const gameMode = !hasExtraMoves ? 'normal' : 'bonus';

	const logo = {
		normal: {
			img: './images/logo.svg',
			alt: `rock paper scissors game`,
		},
		bonus: {
			img: './images/logo-bonus.svg',
			alt: `rock paper scissors lizard spock game`,
		},
	};

	const scoreCardText = {
		pve: 'score',
		pvp: {
			firstPlayer: (
				<>
					p1 <span>score</span>
				</>
			),
			secondPlayer: (
				<>
					p2 <span>score</span>
				</>
			),
		},
	};

	return (
		<Container className={isMultiplayer ? 'multiplayer' : undefined}>
			{isMultiplayer && (
				<ScoreCard label={scoreCardText.pvp.secondPlayer} score={score} />
			)}

			<LogoTitle>
				<img src={logo[gameMode].img} alt={logo[gameMode].alt} />
			</LogoTitle>

			<ScoreCard
				label={isMultiplayer ? scoreCardText.pvp.firstPlayer : scoreCardText.pve}
				score={score}
			/>
		</Container>
	);
};

export default Header;
