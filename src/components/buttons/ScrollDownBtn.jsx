import React, { useEffect, useState } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";

export const ScrollDownBtn = () => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 100 ? setVisible(false) : setVisible(true);
		});
	}, []);

	function scrollDown() {
		window.scrollTo({
			top: window.innerHeight - 132,
			behavior: "smooth",
		});
	}

	return (
		<>
			{visible && <IoIosArrowRoundDown
				onClick={scrollDown}
				className="w-15 h-15 lg:w-20 lg:h-20 opacity-60 absolute bottom-2 right-2 md:bottom-5 md:right-5 lg:bottom-10 lg:right-10 text-whiteCustom cursor-pointer hover:scale-120"
			/>}
		</>
	);
};