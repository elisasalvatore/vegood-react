import React from "react";
//components
import { Navbar } from "./Navbar";

export const Hero = () => {
	return (
		<div className="w-screen h-[80vh] md:h-screen flex justify-center items-center bg-[url(../assets/images/bg-leaf.jpg)] bg-cover bg-center">
			<Navbar />
			<div className="hero-content-container w-5/6 h-5/6 bg-blue-500">
				<div className="title-container w-5/6 h-full bg-yellow-200 flex flex-col justify-center md:justify-evenly text-whiteCustom font-bold">
					<p className="text-[54px] md:text-8xl lg:text-[150px]">Vegetarian</p>
					<p className="text-[54px] md:text-8xl lg:text-[150px]">Good</p>
					<h1 className="text-[54px] md:text-8xl lg:text-[150px]">Vegood</h1>
				</div>
			</div>
		</div>
	);
};
