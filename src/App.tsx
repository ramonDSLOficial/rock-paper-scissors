import React, { useRef } from 'react';
import { Container, Main } from './style/appStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './steps/Home';
import ModalRulesBtn from './components/ModalRulesBtn';
import Rules from './steps/Rules';
import Game from './steps/Game';

const App: React.FC = () => {
	const modalRulesRef = useRef<HTMLDialogElement | null>(null)

	return (
		<Container>
			<Header />

			<Main>
				<Home />
				{/* <Game /> */}

				<ModalRulesBtn modalRulesRef={modalRulesRef}/>
				<Rules modalRulesRef={modalRulesRef}/>
			</Main>

			<Footer />
		</Container>
	);
};

export default App;
