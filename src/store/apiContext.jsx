import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
//components
import { HandlingErrors } from "../components/HandlingErrors";
import { Loader } from "../components/Loader";

const API_KEY = import.meta.env.VITE_APP_API_KEY; //Spoonacular API KEY
const API_URL = `https://api.spoonacular.com/recipes/complexSearch`; //Spoonacular API URL for all recipes
const URL_PARAM_DIET = "vegetarian"; // Spoonacular API URL Param
const URL_PARAM_NUMBER = "100"; // Spoonacular API URL Param

const APIContext = createContext();
export default APIContext;

export function RecipesContextProvider({ children }) {
	const [recipes, setRecipes] = useState([]);
	const [visible, setVisible] = useState(6);
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState(false);

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const res = await axios.get(
				`${API_URL}?apiKey=${API_KEY}&diet=${URL_PARAM_DIET}&number=${URL_PARAM_NUMBER}`
			);
			const data = res.data.results;
			console.log("DATA", data);
			setRecipes(data);
		} catch (error) {
			console.error(error);
			setErrors(true);
		} finally {
			// Simulate a loading delay
			setTimeout(() => {
				setIsLoading(false);
			}, 2000);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : errors ? (
				<HandlingErrors />
			) : (
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
			)}
		</>
	);
}

// export function useAPI() {
// 	const context = useContext(APIContext);
// 	if (context === undefined) {
// 		throw new Error("Context must be used within a Provider");
// 	}
// 	return context;
// }
