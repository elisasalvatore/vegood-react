import React, { useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";


export const ScrollTopBtn = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 1400 ? setVisible(true) : setVisible(false);
		});
	}, []);

	function scrollTop() {
		window.scrollTo({
			top: window.innerHeight - 135,
			behavior: "smooth",
		});
	}

	return (
		<>
			{visible && 
				<IoIosArrowRoundUp
				onClick={scrollTop}
				className="w-8 h-8 md:w-10 md:h-10 2xl:w-14 2xl:h-14 fixed absolute bottom-16 2xl:bottom-15 right-1 lg:right-15 rounded-[50%] bg-orangeCustom text-white cursor-pointer hover:scale-80 z-9999"
				/>
			}
		</>
	);
};
