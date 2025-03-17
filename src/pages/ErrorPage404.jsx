import React from "react";
import { NavLink } from "react-router";

export const ErrorPage404 = () => {
	return (
		<div className="w-screen h-screen bg-[url(../assets/images/bg-leaf.jpg)] bg-cover bg-center brightness-90 flex flex-col items-center justify-center font-medium text-whiteCustom">
			<h2 className="text-7xl md:text-9xl leading-25 md:leading-40 font-semibold">Ooops!</h2>
			<h3 className="text-5xl md:text-7xl 2xl:text-8xl leading-15 md:leading-18 font-semibold">
				404
			</h3>
			<h4 className="text-xl md:text-2xl 2xl:text-4xl leading-10 md:leading-15 2xl:leading-20">
				This page could not be found
			</h4>
			<NavLink
				to="/"
				style={{ padding: "8px 10px", margin: "20px 0" }}
				className="w-fit h-fit rounded bg-orangeCustom hover:cursor-pointer hover:underline"
			>
				Go Homepage
			</NavLink>
		</div>
	);
};
