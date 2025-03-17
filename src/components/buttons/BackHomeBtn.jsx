import React from "react";
import { NavLink } from "react-router";

export const BackHomeBtn = () => {
    return <NavLink className="w-[110px] h-fit z-45 flex justify-center items-center cursor-pointer uppercase -rotate-90 text-orangeCustom absolute top-112 -left-10 md:top-205 md:-left-4 lg:top-240 lg:left-0 lg:text-[18px] 2xl:w-[140px] 2xl:top-290 2xl:left-1 2xl:text-[22px] hover:bg-orangeCustom hover:text-whiteCustom" to="/">
        back home
    </NavLink>;
};
