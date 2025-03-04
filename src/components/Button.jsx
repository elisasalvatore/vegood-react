import React from "react";

export const Button = ({text}) => {
	return (
		<div>
			<button className="bg-orangeCustom w-[125px] h-[45px] lg:w-[150px] lg:h-[55px] lg:text-[18px] 2xl:text-[20px] text-whiteCustom font-bold rounded hover:bg-transparent hover:text-orangeCustom hover:border-3 hover:border-orangeCustom cursor-pointer">
				{text}
			</button>
		</div>
	);
};
