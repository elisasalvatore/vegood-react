import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
//components
import { BackHomeBtn } from "../components/buttons/BackHomeBtn";
import { IngredientsRecipe } from "../components/recipe-details/IngredientsRecipe";
import { InstructionsRecipe } from "../components/recipe-details/InstructionsRecipe";
import { SummaryRecipe } from "../components/recipe-details/SummaryRecipe";
import { TitleImageRecipe } from "../components/recipe-details/TitleImageRecipe";
import { SEORecipe } from "../components/SEORecipe";

export const RecipeDetails = () => {
	const [recipe, setRecipe] = useState({});
	const { id } = useParams();
	const API_URL_RECIPE_DETAILS = `https://api.spoonacular.com/recipes/${id}/information`;
	const API_KEY = import.meta.env.VITE_APP_API_KEY; //Spoonacular API KEY

	useEffect(() => {
		const getRecipeDetails = async () => {
			const res = await axios.get(
				`${API_URL_RECIPE_DETAILS}?apiKey=${API_KEY}`
			);
			const data = res.data;
			setRecipe(data);
		};
		getRecipeDetails();
	}, [API_URL_RECIPE_DETAILS, API_KEY, id]);

	const {
		image,
		title,
		summary,
		servings,
		extendedIngredients,
		instructions,
		vegan,
		glutenFree,
	} = recipe;

	return (
		<>
			{/* SEO Open Graph Tags*/}
			<SEORecipe id={id} title={title} summary={summary} image={image} />

			{/* Title and Image (full screen) */}
			<TitleImageRecipe title={title} image={image} />

			{/* START MAIN CONTAINER - Recipe details (green one) */}
			<div
				style={{ paddingBottom: "60px" }}
				className="w-6/6 bg-mintGreenCustom flex items-center justify-center"
			>
				{/* Back To Home Button */}
				<BackHomeBtn />

				{/* START INNER CONTAINER - Recipe details (white one) */}
				<div
					style={{ paddingBottom: "60px" }}
					className="w-5/6 h-[100%] bg-whiteCustom flex flex-col items-center justify-between"
				>
					{/* Summary */}
					<SummaryRecipe
						glutenFree={glutenFree}
						vegan={vegan}
						summary={summary}
					/>

					{/* Ingredients */}
					<IngredientsRecipe
						extendedIngredients={extendedIngredients}
						servings={servings}
					/>

					{/* Instructions */}
					<InstructionsRecipe instructions={instructions} />
				</div>
				{/* END INNER CONTAINER - Recipe details (white one) */}
			</div>
			{/* END MAIN CONTAINER - Recipe details (green one) */}
		</>
	);
};
