import { Main } from '../pages/';
import Header from '../header/header.jsx';
import React from 'react';
import './App.scss'

const App = () => {
	return (
		<>
			<Header />
			<main className="page">
				<div className="page__container">
					<Main />
				</div>
			</main >
		</>
	)
};

export default App;