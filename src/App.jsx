import React from "react";
// context
import { RecipesContextProvider } from "./store/apiContext";
// components
import { Navbar } from "./components/Navbar";
import { SectionHero } from "./components/hero-section/SectionHero";
import { SectionRecipes } from "./components/recipes-section/SectionRecipes";

function App() {
	return (
		<RecipesContextProvider>
			<div className="App">
				<Navbar />
				<SectionHero />
				<SectionRecipes />
			</div>
		</RecipesContextProvider>
	);
}

export default App;
