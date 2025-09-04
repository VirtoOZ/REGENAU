import { Main, About, Advantages, HelpForm, Catalog } from '../pages/index.js';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import React from 'react';
import { Routes, Route } from 'react-router';
import './App.scss'

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/About" element={<About />} />
				<Route path="/Advantages" element={<Advantages />} />
				<Route path="/HelpForm" element={<HelpForm />} />
				<Route path="/Catalog" element={<Catalog />} />
			</Routes>
			<Footer />
			{/* <Header />
			<Main />
			<About />
			<Advantages />
			<HelpForm />
			<Catalog />
			<Footer /> */}
		</>
	)
};

export default App;