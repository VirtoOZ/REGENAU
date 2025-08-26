import { Main, About, Advantages } from '../pages';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import React from 'react';
import './App.scss'

const App = () => {
	return (
		<>
			<Header />
			<main className="page">
				<Main />
			</main >
			<About />
			<Advantages />
			<Footer />
		</>
	)
};

export default App;