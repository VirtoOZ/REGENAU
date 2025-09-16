import {
	Main, About, Advantages, HelpForm, Catalog,
	Questions, Consulting, Portfolio, Withuse, Blog, ContactUs
} from '../pages/index.js';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import React from 'react';
import { Routes, Route } from 'react-router';

const App = () => {
	return (
		<>
			{/* <Header /> */}
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/About" element={<About />} />
				<Route path="/Advantages" element={<Advantages />} />
				<Route path="/HelpForm" element={<HelpForm />} />
				<Route path="/Catalog" element={<Catalog />} />
				<Route path="/Questions" element={<Questions />} />
				<Route path="/Consulting" element={<Consulting />} />
				<Route path="/Portfolio" element={<Portfolio />} />
				<Route path="/Withuse" element={<Withuse />} />
				<Route path="/Blog" element={<Blog />} />
				<Route path="/ContactUs" element={<ContactUs />} />
			</Routes>
		</>
	)
};

export default App;