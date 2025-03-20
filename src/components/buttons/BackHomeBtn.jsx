import React from "react";
import { NavLink } from "react-router";

export const BackHomeBtn = () => {
	return (
		<div className="btn-backToHome">
			<NavLink
				to="/"
				style={{ padding: "2px 5px" }}
				className="cursor-pointer uppercase text-orangeCustom hover:bg-orangeCustom hover:text-whiteCustom text-xs lg:text-lg 2xl:text-2xl"
			>
				back home
			</NavLink>
		</div>
	);
};
