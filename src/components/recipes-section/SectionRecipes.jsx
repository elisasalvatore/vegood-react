import React from "react";
//components
import { TitleRecipes } from "./TitleRecipes";
import { SearchBar } from "../SearchBar";
import { RecipesList } from "./RecipesList";
import { Button } from "../Button";

export const SectionRecipes = () => {
	return (
		<div className="section w-screen h-full bg-mintGreenCustom flex flex-col column items-center justify-between">
			<TitleRecipes />
			<SearchBar />
			<RecipesList />
			<Button text="Load more" />
		</div>
	);
};
