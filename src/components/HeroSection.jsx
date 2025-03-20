import React from "react";
//components
import { ScrollDownBtn } from "./buttons/ScrollDownBtn";

export const HeroSection = () => {
	return (
		<div className="w-screen h-screen bg-[url(../assets/images/bg-leaf.jpg)] bg-cover bg-center brightness-90">
			<div className="w-screen h-screen items-center justify-center flex flex-col">
				{/* Title */}
				<div className="w-5/6 h-screen flex flex-col justify-center">
					<h1 className="text-[43px] leading-[50px] sm:text-[50px] md:text-[100px] md:leading-[100px] lg:text-[150px] lg:leading-[150px] 2xl:text-[200px] 2xl:leading-[200px] text-whiteCustom font-bold">
						VEGETARIAN <br />
						GOOD <br />
						VEGOOD
					</h1>
				</div>
				{/* Scroll Down Button */}
				<ScrollDownBtn />
			</div>
		</div>
	);
};
