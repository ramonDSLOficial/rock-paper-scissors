import React from 'react';

import { CloseBtn, Container, RulesImage, Title } from './styles';

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

			<CloseBtn title='close rules' onClick={closeModalRules}>
				<img src="./images/icon-close.svg" alt="" />
			</CloseBtn>
		</Container>
	);
};

export default Rules;
