import React from "react";

export const FilteredRecipesList = ({ recipes }) => {
	return (
		<div className="section w-5/6 h-full flex flex-wrap flex-column items-center justify-between gap-14">
			{recipes &&
				recipes.map((recipe) => {
					return (
						<div
							key={recipe.id}
							style={{
								backgroundImage: `url(${recipe.image})`,
							}}
							className="card-recipe w-4/4 h-[231px] md:w-[45%] lg:w-[29%] 2xl:h-[420px] bg-cover bg-center bg-no-repeat flex items-end cursor-pointer hover:brightness-50 text-transparent hover:text-orangeCustom"
						>
							{/* <p className="absolute bottom-35 left-50 text-[30px] w-[200px]">
								See more
							</p> */}
							<div className="ctn-title-recipe w-6/6 h-[48%] bg-whiteCustom z-20 flex flex-wrap items-center justify-center overflow-hidden">
								<h1 className="text-blackCustom text-[18px] 2xl:text-[28px] text-center font-bold uppercase z-40">
									{recipe.title}
								</h1>
							</div>
						</div>
					);
				})}
		</div>
	);
};
