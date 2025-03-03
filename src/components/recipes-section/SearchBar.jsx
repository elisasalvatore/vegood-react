import React from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
	return (
		<div className="w-5/6 h-20 md:h-25 lg:h-30 flex items-center justify-end">
			<div className="w-full md:w-2/6  h-12 lg:h-14 bg-whiteCustom flex items-center justify-start gap-2">
				<FaSearch className="icon text-md lg:text-lg 2xl:text-2xl  text-darkGreenCustom" />
				<input
					type="text"
					placeholder="Search your recipes"
					className="text-md lg:text-lg 2xl:text-2xl text-darkGreenCustom w-full h-full outline-none"
				/>
			</div>
		</div>
	);
};
