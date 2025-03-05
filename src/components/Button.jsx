import React from "react";

export const Button = ({ text }) => {
	return (
		<div>
			<button className="w-[125px] h-[45px] lg:w-[150px] lg:h-[55px] lg:text-[18px] 2xl:text-[20px] font-bold rounded bg-transparent text-orangeCustom border-3 border-orangeCustom cursor-pointer hover:bg-orangeCustom hover:text-whiteCustom">
				{text}
			</button>
		</div>
	);
};
