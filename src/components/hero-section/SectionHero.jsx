import React from "react";
//components
import { TitleHero } from "./TitleHero";
import { ScrollDownBtn } from "./ScrollDownBtn";

export const SectionHero = () => {
	return (
		<div className="w-screen h-screen bg-[url(../assets/images/bg-leaf.jpg)] bg-cover bg-center brightness-90">
			<div className="w-screen h-screen items-center justify-center flex flex-col">
				<TitleHero />
				<ScrollDownBtn />
			</div>
		</div>
	);
};
