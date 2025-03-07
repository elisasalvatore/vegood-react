import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export const apiKey = "467e128f7d014cd1887a9963df84ec9c"; // API key form spoonacular.com
export const searchRecipesApi = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=vegetarian&number=100&query=`;

const APIContext = createContext();
export default APIContext;

export function RecipesContextProvider({ children }) {
		const [recipes, setRecipes] = useState([]);
		const [param, setParam] = useState("");
		const [debouncedFilter] = useDebounce(param, 2000);
		const [visible, setVisible] = useState(6);
	
		const fetchData = async () => {
				try {
					const data = await axios.get(searchRecipesApi + param);
					const results = data.data.results;
					console.log(results)
					setRecipes(results);
				} catch (error) {
					console.error(error);
				}
			
		};
	
		useEffect(() => {
			// will be called after every state (filter) update
			fetchData();
		}, [param, debouncedFilter]);

	return (
		<APIContext.Provider value={{ recipes, param, setParam, visible, setVisible }}>{children}</APIContext.Provider>
	);
}

// export function useAPI() {
// 	const context = useContext(APIContext);
// 	if (context === undefined) {
// 		throw new Error("Context must be used within a Provider");
// 	}
// 	return context;
// }
