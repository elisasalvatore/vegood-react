import React, { useState } from "react";

export const RecipeCard = ({ recipe }) => {
	const [isHover, setIsHover] = useState(false);

	return (
		<>
			<div
				key={recipe.id}
				className="w-4/4 h-[300px] md:w-[45%] lg:w-[30%] 2xl:h-[500px] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
                onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				{isHover ? (
					<a href="" className="w-full h-full rounded-xl bg-darkGreenCustom text-3xl text-orangeCustom flex justify-center items-center">
						Let's Cook!
					</a>
				) : (
					<>
						<div className="w-full h-[60%]">
								<img
									src={recipe.image}
									alt={recipe.title}
									className="w-full h-full object-cover rounded-t-xl"
								/>
						</div>

						<div className="w-full h-[100px] md:h-[120px] 2xl:h-[40%] bg-whiteCustom z-20 flex flex-wrap items-center justify-center overflow-hidden rounded-b-xl">
							<h1
								className="text-blackCustom text-[18px] 2xl:text-[28px] text-center font-bold uppercase z-40"
								style={{ padding: "10px" }}
							>
								{/* {recipe.title} */}
								{recipe.name}
							</h1>
						</div>
					</>
				)}
			</div>
		</>
	);
};
