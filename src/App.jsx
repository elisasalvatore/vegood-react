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
			<div className="App w-full bg-mintGreenCustom flex flex-col items-center justify-center">
				<Navbar />
				<SectionHero />
				<SectionRecipes />
			</div>
		</RecipesContextProvider>
	);
}

export default App;
