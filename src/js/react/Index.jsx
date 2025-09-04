import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import { BrowserRouter as Router } from "react-router";

// Объект для вывода
const root = document.querySelector("#root")
	? document.querySelector("#root")
	: document.querySelector(".wrapper");

// Main rendering
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
);
