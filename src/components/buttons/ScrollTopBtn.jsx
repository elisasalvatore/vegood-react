import React, { useEffect, useState } from "react";

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
				<div
				onClick={scrollTop}
				className="w-[120px] h-fit z-9999 flex items-center justify-center uppercase rotate-90 fixed absolute bottom-27 -right-10 md:-right-2 lg:w-[140px] lg:text-[18px] 2xl:w-[170px] 2xl:bottom-32 2xl:text-[22px] rounded text-orangeCustom cursor-pointer hover:bg-orangeCustom hover:text-whiteCustom"
				>
					scroll to top
				</div>
			}
		</>
	);
};
