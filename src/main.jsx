import "./styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
//components
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				{/* <Route path="/prova" element={<Prova />} /> */}
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
