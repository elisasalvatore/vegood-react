import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const apiKey = "592279103e82485c9bb6858af69f33ac"; // API key form spoonacular.com
const recepiesApi = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&include-tags=vegetarian&number=12`;

const APIContext = createContext();
export default APIContext;

export function RecipesContextProvider({ children }) {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(recepiesApi);
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
