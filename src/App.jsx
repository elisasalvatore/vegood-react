import React from "react";
// components
import { Navbar } from "./components/Navbar";
import { SectionHero } from "./components/hero-section/SectionHero";
import { SectionRecipes } from "./components/recipes-section/SectionRecipes";

function App() {
	return (
		<div className="App">
			<Navbar />
			<SectionHero />
			<SectionRecipes />
		</div>
	);
}

export default App;
