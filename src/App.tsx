import React from 'react';
import { Container, Main } from './style/appStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const App: React.FC = () => {
	return (
		<Container>
			<Header />

      <Main>
        <Home />  
      </Main>

			<Footer />
		</Container>
	);
};

export default App;
