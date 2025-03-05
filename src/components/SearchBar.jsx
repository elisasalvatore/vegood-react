import React from "react";
//components
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ filter, setFilter }) => {
	return (
		<div className=" w-5/6 h-20 md:h-25 lg:h-30 flex items-center justify-start gap-2 md:gap-4">
			<div className="w-full h-12 lg:h-14 bg-whiteCustom flex items-center justify-start gap-2">
				<FaSearch style={{marginLeft: "20px", marginRight: "8px"}} className="text-md lg:text-lg 2xl:text-2xl text-darkGreenCustom" />
				<input
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
					type="text"
					placeholder="Search recipe or ingredient"
					className="text-md lg:text-lg 2xl:text-2xl text-darkGreenCustom w-full h-full outline-none"
				/>
			</div>
		</div>
	);
};
