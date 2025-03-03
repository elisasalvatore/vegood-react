import React, { useContext } from "react";
import APIContext from "../../store/apiContext";

export const RecipesList = () => {
	const { recipes } = useContext(APIContext);

	return (
		<div className="w-full h-full flex flex-col items-center">
			{recipes.map((recipe) => {
				return (
					<div key={recipe.id}>
						<h1>{recipe.title}</h1>
						<img src={recipe.image} alt="" />
					</div>
				);
			})}
		</div>
	);
};
