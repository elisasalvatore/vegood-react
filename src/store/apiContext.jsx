import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();
export default APIContext;

const apiUrl =
	"https://api.spoonacular.com/recipes/complexSearch?apiKey=592279103e82485c9bb6858af69f33ac&diet=vegetarian";

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
