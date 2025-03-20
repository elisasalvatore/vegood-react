import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router';

export const ScrollTopBtn = () => {
	const [visible, setVisible] = useState(false);
	const pathname = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
		window.addEventListener("scroll", () => {
			window.scrollY > 1400 ? setVisible(true) : setVisible(false);
		});
	}, [pathname])

	function scrollTop() {
		window.scrollTo({
			top: window.innerHeight - 135,
			behavior: "smooth",
		});
	}

	return (
		<>
			{visible && 
				<div
				onClick={scrollTop}
				className="w-[120px] h-fit z-9999 flex items-center justify-center uppercase rotate-90 fixed absolute bottom-30 -right-10 text-xs md:-right-6 lg:w-[140px] lg:bottom-32 lg:text-lg  2xl:w-[180px] 2xl:bottom-40 2xl:text-2xl text-orangeCustom cursor-pointer hover:bg-orangeCustom hover:text-whiteCustom"
				>
					scroll to top
				</div>
			}
		</>
	);
};
