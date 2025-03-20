import React from "react";

export const TitleImageRecipe = ({ title, image }) => {
	return (
		<>
			{/* START HERO IMAGE - Image recipe full screen */}
			<div
				className="w-screen h-100 md:h-screen bg-center bg-no-repeat bg-cover brightness-100 flex items-end justify-center scroll-smooth"
				style={{ backgroundImage: `url(${image})` }}
			>
				<div className="w-5/6 h-[60%] bg-whiteCustom flex items-center justify-center">
					{/* START SECTION ---- Recipe title */}
					<section className="w-5/6 h-6/6 border-b-3 border-lightGreenCustom flex items-center justify-center">
						{/* START TITLE ---- Recipe title */}
						<h2 className="text-3xl md:text-4xl lg:text-6xl 2xl:text-8xl font-bold text-center">
							{title}
						</h2>
						{/* END TITLE ---- Recipe title */}
					</section>
					{/* START SECTION ---- Recipe title */}
				</div>
			</div>
			{/* END HERO IMAGE - Image recipe full screen */}
		</>
	);
};
