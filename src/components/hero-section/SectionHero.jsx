import React from "react";
//components
import { ScrollDownBtn } from "./scrollDownBtn";
import { TitleHero } from "./TitleHero";

export const SectionHero = () => {
	return (
		<div className="w-screen h-[98vh] md:h-screen flex justify-center items-center bg-[url(../assets/images/bg-leaf.jpg)] bg-cover bg-center">
			<div className="w-5/6 h-5/6 flex">
				<TitleHero />
				<ScrollDownBtn />
			</div>
		</div>
	);
};
