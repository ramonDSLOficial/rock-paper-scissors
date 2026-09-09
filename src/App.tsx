import React from 'react';
import { Container, Main } from './style/appStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ModalRulesBtn from './components/ModalRulesBtn';
import Rules from './pages/Rules';
import Game from './pages/Game';

const App: React.FC = () => {
	return (
		<Container>
			<Header />

			<Main>
				{/* <Home /> */}
				<Game />

				<ModalRulesBtn />
				<Rules />
			</Main>

			<Footer />
		</Container>
	);
};

export default App;
