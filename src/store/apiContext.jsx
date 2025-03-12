import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const API_URL = `https://api.spoonacular.com/recipes/complexSearch`; //Spoonacular API URL
export const API_KEY = import.meta.env.VITE_APP_API_KEY; //Spoonacular API KEY
export const URL_PARAM_DIET = "vegetarian";

const APIContext = createContext();
export default APIContext;

export function RecipesContextProvider({ children }) {
	const [recipes, setRecipes] = useState([]);
	const [visible, setVisible] = useState(6);

	const fetchData = async () => {
		try {
			const res = await axios.get(
				`${API_URL}?apiKey=${API_KEY}&diet=${URL_PARAM_DIET}&number=100`
			);
			const data = res.data.results;
			console.log("DATA", data);
			setRecipes(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<APIContext.Provider
			value={{
				API_URL,
				API_KEY,
				URL_PARAM_DIET,
				recipes,
				setRecipes,
				visible,
				setVisible,
			}}
		>
			{children}
		</APIContext.Provider>
	);
}

// export function useAPI() {
// 	const context = useContext(APIContext);
// 	if (context === undefined) {
// 		throw new Error("Context must be used within a Provider");
// 	}
// 	return context;
// }
