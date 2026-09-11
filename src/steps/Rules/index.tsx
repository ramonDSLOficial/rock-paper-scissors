import React from 'react';

import { CloseBtn, Container, RulesImage, Title } from './styles';

const Rules: React.FC = () => {
	return (
		<Container>
			<Title>rules</Title>

			<RulesImage
				src="./images/image-rules.svg"
				alt="rules: scissors beats paper. paper beats rock. rock beats scissors."
			/>

			<CloseBtn title='close rules'>
				<img src="./images/icon-close.svg" alt="" />
			</CloseBtn>
		</Container>
	);
};

export default Rules;
