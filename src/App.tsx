import React from 'react';
import { Container } from './style/appStyles';
import Header from './components/Header';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <Container>
		<Header />
		<Footer />
    </Container>
  );
}

export default App;