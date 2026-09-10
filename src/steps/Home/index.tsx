import React from 'react';

import { Container } from './styles';
import { defaultMoves } from '../../store/store';
import Move from '../../components/Move';

const Home: React.FC = () => {
	return (
		<Container>
			{defaultMoves.map((move) => {
				return <Move key={move} move={move} id={move} />;
			})}
		</Container>
	);
};

export default Home;
