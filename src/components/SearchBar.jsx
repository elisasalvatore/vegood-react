import React from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ param, setParam }) => {
	return (
		<div className=" w-5/6 h-10 flex items-center justify-start lg:justify-end gap-2 md:gap-4">
			<div className="w-full h-14 lg:w-2/6 bg-whiteCustom flex items-center justify-start gap-2">
				<FaSearch style={{marginLeft: "20px", marginRight: "8px"}} className="text-md lg:text-lg 2xl:text-2xl text-darkGreenCustom" />
				<input
					value={param}
					onChange={(e) => setParam(e.target.value)}
					type="text"
					placeholder="Search recipe or ingredient"
					className="text-md lg:text-lg 2xl:text-2xl text-darkGreenCustom w-full h-full outline-none"
				/>
			</div>
		</div>
	);
};
