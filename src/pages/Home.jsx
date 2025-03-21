import React from "react";
// components
import { Head } from "../components/Head";
import { HeroSection } from "../components/HeroSection";
import { RecipesSection } from "../components/recipes/RecipesSection";

export const Home = () => {

	return (
		<>
			{/* Head Meta Tags */}
			<Head />
			{/* Homepage content */}
			<div className="App w-full bg-mintGreenCustom flex flex-col items-center justify-center scroll-smooth">
				<HeroSection />
				<RecipesSection />
			</div>
		</>
	);
};
