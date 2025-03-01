import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";

export const ScrollDownBtn = () => {
	function scrollDown() {
		window.scrollTo({
			top: window.innerHeight - 132,
			behavior: "smooth",
		});
	}

	return (
		<div className="flex items-end justify-center w-1/6">
			<div className="w-10 h-10 lg:w-15 lg:h-15 absolute right-[20px] lg:right-[40px] bottom-[40px] bg-blackCustom opacity-50 border border-whiteCustom flex justify-center items-center cursor-pointer hover:scale-75">
				<IoIosArrowRoundDown
					onClick={scrollDown}
					className="w-10 h-10 lg:w-15 lg:h-15 text-whiteCustom "
				/>
			</div>
		</div>
	);
};
