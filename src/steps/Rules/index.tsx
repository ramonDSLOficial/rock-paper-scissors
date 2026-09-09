import React from 'react';

import { CloseBtn, Container, RulesImage, Title } from './styles';

const Rules: React.FC = () => {
	return (
		<Container>
			<Title>rules</Title>
            
			<RulesImage alt="./images/image-rules.svg" />
            
			<CloseBtn>
				<img src="./images/icon-close.svg" alt="close rules" />
			</CloseBtn>
		</Container>
	);
};

export default Rules;
