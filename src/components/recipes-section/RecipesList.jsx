import React, { useContext } from "react";
import APIContext from "../../store/apiContext";

export const RecipesList = () => {
	const { recipes } = useContext(APIContext);

	return (
		<div className="section w-5/6 h-full flex flex-wrap flex-column items-center justify-between gap-10">
			{recipes.map((recipe) => {
				return (
					<div
						key={recipe.id}
						style={{ backgroundImage: `url(${recipe.image})` }}
						className="w-4/4 h-[231px] md:w-[45%] lg:w-[30%] 2xl:h-[331px] bg-cover bg-center bg-no-repeat flex items-end cursor-pointer "
					>
						<div className="ctn-title-recipe w-6/6 h-2/5 bg-whiteCustom z-20 flex flex-wrap items-center justify-between overflow-hidden">
							<h1 className="text-blackCustom text-[18px] 2xl:text-[25px] font-bold z-40">
								{recipe.title}
							</h1>
						</div>
					</div>
				);
			})}
		</div>
	);
};
