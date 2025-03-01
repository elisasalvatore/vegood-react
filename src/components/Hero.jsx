import React from "react";
//components
import { Navbar } from "./Navbar";
import { ScrollDownBtn } from "./scrollDownBtn";
import { TitleHero } from "./TitleHero";

export const Hero = () => {
	return (
		<div className="w-screen h-[98vh] md:h-screen flex justify-center items-center bg-[url(../assets/images/bg-leaf.jpg)] bg-cover bg-center">
			<Navbar />
			<div className="hero-content-container w-5/6 h-5/6 flex">
				<TitleHero />
				<ScrollDownBtn />
			</div>
		</div>
	);
};
