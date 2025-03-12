import React from "react";
// components
// import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { RecipesSection } from "../components/recipes/RecipesSection";

export const Home = () => {
	return (
		<div className="App w-full bg-mintGreenCustom flex flex-col items-center justify-center">
			<HeroSection />
			<RecipesSection />
		</div>
	);
};
