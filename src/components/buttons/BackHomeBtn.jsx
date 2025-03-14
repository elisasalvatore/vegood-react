import React from "react";
import { NavLink } from "react-router";

export const BackHomeBtn = () => {
	return <NavLink className="w-fit h-fit flex justify-center align-items cursor-pointer uppercase -rotate-90 text-orangeCustom absolute text-sm top-112 -left-6 md:text-md md:top-205 md:-left-1 lg:text-lg lg:top-240 lg:left-1 2xl:text-xl 2xl:top-290 2xl:left-5 hover:scale-75 hover:font-bold hover:-left-7 hover:md:-left-2 hover:lg:left-0 hover:2xl:left-4" to="/">
        back home
    </NavLink>;
};
