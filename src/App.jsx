import React from "react";
import { Route, Routes } from "react-router";
// store
import { RecipesContextProvider } from "./store/apiContext";
//pages
import { ErrorPage404 } from "./pages/ErrorPage404";
import { Home } from "./pages/Home";
import { RecipeDetails } from "./pages/RecipeDetails";
//components
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ScrollTopBtn } from "./components/buttons/ScrollTopBtn";

function App() {
	return (
		<RecipesContextProvider>
			<Navbar />
			<ScrollTopBtn />
			<Routes>
				<Route path="*" element={<ErrorPage404 />} />
				<Route path="/" element={<Home />} />
				<Route path="/recipes/:id" element={<RecipeDetails />} />
			</Routes>
			<Footer />
		</RecipesContextProvider>
	);
}

export default App;
