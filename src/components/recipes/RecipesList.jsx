import React from "react";
import { RecipeCard } from "./RecipeCard";

export const RecipesList = ({recipes, visible}) => {
	return (
		<div className="w-5/6 h-full flex flex-wrap flex-column items-center justify-center gap-10">
			{recipes.slice(0, visible).map((recipe) => {
				return (
					<RecipeCard key={recipe.id} recipe={recipe} />
				);
			})}
		</div>
	);
};
