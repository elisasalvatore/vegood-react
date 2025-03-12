import React from "react";
import { Route, Routes } from "react-router";
// store
import { RecipesContextProvider } from "./store/apiContext";
//pages
import { Home } from "./pages/Home";
import { RecipeDetails } from "./pages/RecipeDetails";
//components
import { Navbar } from "./components/Navbar";

function App() {
	return (
		<RecipesContextProvider>
			<Navbar />
			<Routes>
				{/* <Route path="*" element={<NoMatch />} /> ----- TODOOOO ------ */} 
				<Route path="/" element={<Home />} />
				<Route path="/recipes/:id" element={<RecipeDetails />} />
			</Routes>
		</RecipesContextProvider>
	);
}

export default App;
