import React from "react";
import { TitleRecipes } from "./TitleRecipes";
import { SearchBar } from "./SearchBar";
import { RecipesList } from "./RecipesList";

export const SectionRecipes = () => {
	return (
		<div className="section w-screen h-full bg-mintGreenCustom flex flex-col column items-center justify-between">
			<TitleRecipes />
			<SearchBar />
			<RecipesList />
		</div>
	);
};
