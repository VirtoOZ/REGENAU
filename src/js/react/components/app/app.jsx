import { Main } from '../pages/index.js';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx'
import React from 'react';
import './App.scss'

const App = () => {
	return (
		<>
			<Header />
			<main className="page">
				<Main />
			</main >
			<Footer />
		</>
	)
};

export default App;