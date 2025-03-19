import { metronome } from "ldrs";
import React, { useEffect } from "react";

export const Loader = () => {
	useEffect(() => {
		metronome.register();
	}, []);

	return (
		<>
			<div className="w-screen h-screen flex justify-center items-center bg-darkGreenCustom">
				<l-metronome size="100" speed="1.6" color="#F4901D"></l-metronome>
			</div>
		</>
	);
};
