import React from 'react';

import Navigation from './components/layout/Navigation';
import Header from './components/layout/Header';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import Popup from './components/Popup';

function App() {
	return (
		<>
			<Navigation />
			<Header />
			<main>
				<Home />
			</main>
			<Footer />
			<Popup />
		</>
	);
}

export default App;
