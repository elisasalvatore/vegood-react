import React from "react";

export const IngredientsRecipe = ({extendedIngredients, servings}) => {
	return (
		<>
			{/* START SECTION ---- Ingredients title */}
			<section style={{ padding: "40px 0" }} className="w-5/6 h-fit font-bold">
				{/* START TITLE ---- Ingredients title */}
				<h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-orangeCustom">
					Ingredients
				</h3>
				{/* END TITLE ---- Ingredients title */}
			</section>
			{/* END SECTION ---- Ingredients title */}

			{/* START SECTION ---- Ingredients list */}
			<div className="w-5/6 h-fit flex flex-col items-start justify-start">
				{/* START SECTION ---- Servings */}
				<section
					style={{ marginBottom: "10px" }}
					className="w-5/6 h-fit flex items-start justify-start"
				>
					{/* START PARAGRAPH ---- Serving p */}
					<p className="text-md md:text-lg lg:text-2xl 2xl:text-3xl text-justify text-blackCustom leading-loose">
						Portions for {servings} servings:
					</p>
					{/* END PARAGRAPH ---- Serving p */}
				</section>
				{/* END SECTION ---- Servings */}
				{/* START LIST ---- Ingredients list */}
				<ul className="w-full text-md lg:text-2xl 2xl:text-3xl text-justify text-blackCustom">
					{extendedIngredients &&
						extendedIngredients.map((ingredient) => (
							<li
								style={{ paddingLeft: "20px", marginLeft: "30px" }}
								key={ingredient.id}
								className="list-disc leading-loose md:leading-12"
							>
								{ingredient.original}
							</li>
						))}
				</ul>
				{/* END LIST ---- Ingredients list */}
			</div>
			{/* END SECTION ---- Ingredients list */}
		</>
	);
};
