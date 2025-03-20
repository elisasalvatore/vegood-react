import React from "react";
import { Helmet } from "react-helmet";
// components
import { HeroSection } from "../components/HeroSection";
import { RecipesSection } from "../components/recipes/RecipesSection";

export const Home = () => {
	return (
		<>
			{/* SEO Open Graph Tags*/}
			<Helmet>
				<html lang="en" />
				<title>Vegood</title>
				<meta name="description" content="A vegetarian recipe website." />
				<link rel="icon" content="../assets/images/favicon.png" />
				{/* OG TAGS */}
				<meta property="og:title" content="Vegood" />
				<meta property="og:url" content="website" />
				<meta property="og:url" content="https://vegood-react.netlify.app/" />
				<meta
					property="og:image"
					content="https://vegood-react.netlify.app/assets/images/vegood-preview.png"
				/>
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="536" />
				<meta property="og:image:height" content="270" />
				<meta property="og:image:alt" content="Vegood Homepage" />
				<meta
					property="og:description"
					content="A vegetarian recipe website."
				/>
				{/* TWITTER TAGS */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:image"
					content="https://vegood-react.netlify.app/assets/images/vegood-preview.png"
				/>
			</Helmet>

			<div className="App w-full bg-mintGreenCustom flex flex-col items-center justify-center scroll-smooth">
				<HeroSection />
				<RecipesSection />
			</div>
		</>
	);
};
