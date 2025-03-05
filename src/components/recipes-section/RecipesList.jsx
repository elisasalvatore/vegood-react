import React, { useContext } from "react";
import APIContext from "../../store/apiContext";

const cardStyles = {
	title:{
		container: {
			margin: 20,
			padding: 10
		}
	}
}

export const RecipesList = () => {
	const { recipes } = useContext(APIContext);

	return (
		<div className="section w-5/6 h-full flex flex-wrap flex-column items-center justify-between gap-10">
			{recipes.map((recipe) => {
				return (
					<div
						key={recipe.id}
						style={{
							backgroundImage: `url(${recipe.image})`,
						}}
						className="card-recipe w-4/4 h-[231px] md:w-[45%] lg:w-[30%] 2xl:h-[420px] bg-cover bg-center bg-no-repeat flex items-end cursor-pointer hover:brightness-50 text-transparent hover:text-orangeCustom"
					>
						{/* <p className="absolute bottom-35 left-50 text-[30px] w-[200px]">
							See more
						</p> */}
						<div style={cardStyles.title.container} className="w-6/6 h-[48%] bg-whiteCustom z-20 flex flex-wrap items-center justify-center overflow-hidden">
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
