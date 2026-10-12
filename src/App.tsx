import React, { useRef } from 'react';
import { Container, Main } from './style/appStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './steps/Home';
import ModalRulesBtn from './components/ModalRulesBtn';
import Rules from './steps/Rules';
import Game from './steps/Game';
import { useGameStore } from './store/gameStore';
import ButtonsFooter from './components/ButtonsFooter';
import ConfigsModalBtn from './components/ConfigsModalBtn';

const App: React.FC = () => {
	const modalRulesRef = useRef<HTMLDialogElement | null>(null);
	const { hasGameHapping } = useGameStore();

	return (
		<Container>
			<Header />

			<Main>
				{!hasGameHapping ? <Home /> : <Game />}

				<ButtonsFooter>
					<ConfigsModalBtn />
					<ModalRulesBtn modalRulesRef={modalRulesRef} />
				</ButtonsFooter>

				<Rules modalRulesRef={modalRulesRef} />
			</Main>

			<Footer />
		</Container>
	);
};

export default App;
