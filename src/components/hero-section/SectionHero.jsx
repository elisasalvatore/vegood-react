import React from "react";
//components
import { ScrollDownBtn } from "./scrollDownBtn";
import { TitleHero } from "./TitleHero";

export const SectionHero = () => {
	return (
		<div className="w-screen h-screen bg-[url(../assets/images/bg-leaf.jpg)] bg-cover bg-center">
			<div className="w-screen h-screen items-center justify-center flex flex-col">
				<TitleHero />
				<ScrollDownBtn />
			</div>
		</div>
	);
};
