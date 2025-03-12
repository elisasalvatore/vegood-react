import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
//store
import APIContext from "../store/apiContext";

export const SearchBar = () => {
	const [query, setQuery] = useState("");
	const { API_KEY, API_URL, URL_PARAM_DIET, setRecipes } = useContext(APIContext);

	useEffect(() => {
		// will be called after query state (filter) update
		async function filterData() {
			const res = await axios.get(
				`${API_URL}?query=${query}&apiKey=${API_KEY}&diet=${URL_PARAM_DIET}`
			);
			const data = await res.data.results;
			setRecipes(data);
		}
		filterData();
	}, [query]);

	return (
		<div className=" w-5/6 h-10 flex items-center justify-start lg:justify-end gap-2 md:gap-4">
			<div className="w-full h-14 lg:w-2/6 bg-whiteCustom flex items-center justify-start gap-2">
				<FaSearch
					style={{ marginLeft: "20px", marginRight: "8px" }}
					className="text-md lg:text-lg 2xl:text-2xl text-darkGreenCustom"
				/>
				<input
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					type="text"
					placeholder="Search recipe or ingredient"
					className="text-md lg:text-lg 2xl:text-2xl text-darkGreenCustom w-full h-full outline-none"
				/>
			</div>
		</div>
	);
};
