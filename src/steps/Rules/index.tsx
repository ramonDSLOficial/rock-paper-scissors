import React from 'react';

import { Container, RulesImage, Title } from './styles';
import CloseModalBtn from '../../components/CloseModalBtn';
import { useGameStore } from '../../store/gameStore';

interface RulesProps {
	modalRulesRef: React.RefObject<HTMLDialogElement>;
}

const Rules: React.FC<RulesProps> = ({ modalRulesRef }) => {
	const { hasExtraMoves } = useGameStore();
	const closeModalRules = (): void => modalRulesRef.current.close();
	const gameMode = !hasExtraMoves ? 'normal' : 'bonus';

	const rules = {
		normal: {
			img: './images/image-rules.svg',
			text: `rules: 
					scissors beats paper. 
					paper beats rock. 
					rock beats scissors.`,
		},
		bonus: {
			img: './images/image-rules-bonus.svg',
			text: `rules: 
					scissors beats paper and lizard.
					paper beats rock and spock.
					rock beats scissors and lizard.
					lizard beats spock and paper.
					spock beats scissors and rock.`,
		},
	};

	return (
		<Container id='rules' $hasExtraMoves={hasExtraMoves} ref={modalRulesRef}>
			<Title>rules</Title>

			<RulesImage
				$hasExtraMoves={hasExtraMoves}
				src={rules[gameMode].img}
				alt={rules[gameMode].text}
			/>

			<CloseModalBtn title="close rules" onClick={closeModalRules} />
		</Container>
	);
};

export default Rules;
