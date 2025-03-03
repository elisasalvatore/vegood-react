import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const apiKey = "b4ccafe33f224ba586fada635c6e9147"; // API key form spoonacular.com
const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=vegetarian`;

const APIContext = createContext();
export default APIContext;

export function RecipesContextProvider({ children }) {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(apiUrl);
			console.log(data.results);
			setRecipes(data.results);
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
