import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const apiKey = "b4ccafe33f224ba586fada635c6e9147"; // API key form spoonacular.com
export const recipesApi = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&include-tags=vegetarian&number=12`;
export const searchRecipesApi = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=vegetarian&query=`;

const APIContext = createContext();
export default APIContext;

export function RecipesContextProvider({ children }) {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(recipesApi);
			console.log(data);
			setRecipes(data.recipes);
		};

		fetchData();
	}, []);

	return (
		<APIContext.Provider value={{ recipes }}>{children}</APIContext.Provider>
	);
}

// export function useAPI() {
// 	const context = useContext(APIContext);
// 	if (context === undefined) {
// 		throw new Error("Context must be used within a Provider");
// 	}
// 	return context;
// }
