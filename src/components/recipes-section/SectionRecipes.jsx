import React from "react";
import { TitleRecipes } from "./TitleRecipes";
import { SearchBar } from "./SearchBar";
import { RecipesList } from "./RecipesList";

export const SectionRecipes = () => {
	return (
		<div className="w-screen h-screen bg-mintGreenCustom flex flex-col column items-center">
			<TitleRecipes />
			<SearchBar />
			<RecipesList />
		</div>
	);
};
