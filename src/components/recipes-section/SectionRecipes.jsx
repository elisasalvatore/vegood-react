import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
//store
import { searchRecipesApi } from "../../store/apiContext";
//components
import { Button } from "../Button";
import { SearchBar } from "../SearchBar";
import { FilteredRecipesList } from "./FilteredRecipesList";
import { RecipesList } from "./RecipesList";
import { TitleRecipes } from "./TitleRecipes";

export const SectionRecipes = () => {
	const [filter, setFilter] = useState("");
	const [debouncedFilter] = useDebounce(filter, 1000);
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		// will be called after every state (filter) update
		const fetchFilteredData = async () => {
			if (filter.trim() === "") {
				setSearchResults([]);
				return;
			}

			try {
				const filteredList = await axios.get(searchRecipesApi + filter);
				const dataResults = filteredList.data.results;
				const filteredResults = dataResults.filter((item) =>
					item.title.toLowerCase().includes(filter.toLowerCase())
				);
				// console.log(dataResults);
				console.log(filteredResults);
				setSearchResults(filteredResults);
			} catch (error) {
				console.error(error);
			}
		};

		fetchFilteredData();
	}, [debouncedFilter]);

	return (
		<div style={{padding: "40px 0"}} className="w-screen h-screen bg-mintGreenCustom flex flex-col column items-center justify-start">
			{/* Title section */}
			<TitleRecipes />
			{/* Search Bar */}
			<SearchBar filter={filter} setFilter={setFilter} />
			{/* Recipes List */}
			{searchResults ? (
				searchResults?.length > 0 ? (
					<>
						{/* Display Filtered Recipes List */}
						<FilteredRecipesList recipes={searchResults} />
						{/* Load More Button */}
						<Button text="Load more" />
					</>
				) : (
				<>
						{/* No results */}
						<div className="w-full flex items-start justify-center">
						<h2
							className="text-sm md:text-md lg:text-xl 2xl:text-2xl text-darkGreenCustom"
							style={{ margin: "40px" }}
						>
							No results, search by other ingredient.
						</h2>
					</div>
				</>
				)
			) : (
				<>
					{/* Display All Recipes List */}
					<RecipesList />
					{/* Load More Button */}
					<Button text="Load more" />
				</>
			)}
		</div>
	);
};
