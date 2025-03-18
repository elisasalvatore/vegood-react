import React, { useContext } from "react";
//store
import APIContext from "../../store/apiContext";
//components
import { LoadMoreBtn } from "../buttons/LoadMoreBtn";
import { ScrollTopBtn } from "../buttons/ScrollTopBtn";
import { SearchBar } from "../SearchBar";
import { RecipesList } from "./RecipesList";

export const RecipesSection = () => {
	const { recipes, visible } = useContext(APIContext);

	return (
		<div
			style={{ paddingTop: 40, paddingBottom: 60 }}
			className="w-full lg:w-5/6 min-h-[80vh] h-full bg-mintGreenCustom flex flex-col items-center gap-16"
		>

			{/* Title section */}
			<div className="w-full h-30 md:h-35 lg:h-40 flex items-center justify-center">
				<h1 className="text-2xl md:text-4xl lg:text-6xl leading-[85px] text-darkGreenCustom font-bold border-b-5 border-lightGreenCustom text-center">
					Popular vegetarian recipes
				</h1>
			</div>
			{/* Search Bar section */}
			<SearchBar />
			{/* Recipes List section */}
			{recipes && recipes?.length > 0 ? (
				<>
					{/* If there are results: */}
					{/* Display Recipes List */}
					<RecipesList recipes={recipes} visible={visible} />
					{/* Load More Button */}
					{recipes?.length > visible && <LoadMoreBtn />}
				</>
			) : (
				<>
					{/* If there are no results: */}
					<div className="w-full flex items-start justify-center">
						<h2
							className="lg:text-xl 2xl:text-2xl text-darkGreenCustom text-center"
							style={{ margin: "10px 40px 40px 40px" }}
						>
							No results, look for another ingredient 🥕🌱
						</h2>
					</div>
				</>
			)}
		</div>
	);
};
