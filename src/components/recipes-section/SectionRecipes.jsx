import React, { useContext } from "react";
//store
// import { searchRecipesApi } from "../../store/apiContext";
import APIContext from "../../store/apiContext";
//components
import { LoadMoreButton } from "../LoadMoreButton";
import { SearchBar } from "../SearchBar";
import { RecipesList } from './RecipesList';
import { TitleRecipes } from "./TitleRecipes";

export const SectionRecipes = () => {
	const { recipes, param, setParam, visible} = useContext(APIContext);

	return (
		<div style={{paddingTop: 40, paddingBottom: 60}} className="w-screen min-h-[90vh] h-[100%] bg-mintGreenCustom flex flex-col column items-center justify-start gap-16">
			{/* Title section */}
			<TitleRecipes />
			{/* Search Bar section */}
			<SearchBar param={param} setParam={setParam} />
			{/* Recipes List */}
			{recipes &&
				recipes?.length > 0 ? (
					<>
						{/* If there are results: */}
						{/* Display Recipes List with Load More Button */}
						<RecipesList recipes={recipes} visible={visible} />	
						{recipes?.length > visible && <LoadMoreButton /> }
					</>
				) : (
				<>
						{/* If there are no results: */}
						<div className="w-full flex items-start justify-center">
						<h2
							className="text-sm md:text-md lg:text-xl 2xl:text-2xl text-darkGreenCustom"
							style={{ margin: "40px" }}
						>
							No results, look for another ingredient. 🥕🌱
						</h2>
					</div>
				</>
				)}
		</div>
	);
};
