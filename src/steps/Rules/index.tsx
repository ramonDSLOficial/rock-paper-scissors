import React from 'react';

import { Container, RulesImage, Title } from './styles';
import CloseModalBtn from '../../components/CloseModalBtn';

interface RulesProps {
	modalRulesRef: React.RefObject<HTMLDialogElement>
}

const Rules: React.FC<RulesProps> = ({ modalRulesRef }) => {
	const closeModalRules = (): void => modalRulesRef.current.close()
	
	return (
		<Container ref={modalRulesRef}>
			<Title>rules</Title>

			<RulesImage
				src="./images/image-rules.svg"
				alt="rules: scissors beats paper. paper beats rock. rock beats scissors."
			/>

			<CloseModalBtn title='close rules' onClick={closeModalRules} />
		</Container>
	);
};

export default Rules;
