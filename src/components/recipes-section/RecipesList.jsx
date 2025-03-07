import React from "react";

export const RecipesList = ({recipes, visible}) => {
	return (
		<div className="w-5/6 h-full flex flex-wrap flex-column items-center justify-between gap-10">
			{recipes.slice(0, visible).map((recipe) => {
				return (
					<div
						key={recipe.id}
						style={{
							backgroundImage: `url(${recipe.image})`,
							boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1",
						}}
						className="card-recipe w-4/4 h-[300px] md:w-[45%] lg:w-[30%] 2xl:h-[480px] bg-cover bg-center bg-no-repeat flex items-end cursor-pointer hover:brightness-50 text-transparent hover:text-orangeCustom"
					>
						{/* <p className="absolute bottom-35 left-50 text-[30px] w-[200px]">
							See more
						</p> */}
						<div className="w-6/6 h-[48%] bg-whiteCustom z-20 flex flex-wrap items-center justify-center overflow-hidden">
							<h1 className="text-blackCustom text-[18px] 2xl:text-[28px] text-center font-bold uppercase z-40" style={{padding: "15px"}}>
								{recipe.title}
							</h1>
						</div>
					</div>
				);
			})}
		</div>
	);
};
