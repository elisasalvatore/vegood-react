import React from "react";
//store
//components
import { ScrollTopBtn } from "../components/buttons/ScrollTopBtn";

export const RecipeDetails = () => {
	

	return (
		<>
			<ScrollTopBtn />

			<div
				className="w-screen h-100 md:h-screen bg-center bg-no-repeat bg-cover brightness-100"
				// style={{ backgroundImage: `url(${image})` }}
			>
				{/* <img src={image} alt={name} className='w-screen h-screen object-fit'/> */}
			</div>

			<div className="w-6/6 h-screen bg-mintGreenCustom flex items-center justify-center">
				<div
					style={{ paddingBottom: "60px" }}
					className="w-5/6 bg-whiteCustom flex flex-col items-center justify-between relative md:-top-70 lg:-top-60 2xl:-top-125"
				>
					{/* Title */}
					<div
						style={{ padding: "10px" }}
						className="bg-blue-100 w-5/6 h-[220px] md:h-[398px] lg:h-[398px] 2xl:h-[600px] border-b-3 border-lightGreenCustom flex items-center justify-center"
					>
						<h2 className="text-4xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold text-center">
							{name}
                            {/* {title} */}
						</h2>
					</div>

					{/* Summary */}
					<div
						style={{ paddingTop: "60px", paddingBottom: "30px" }}
						className="bg-green-200 w-5/6 h-fit flex items-start justify-center"
					>
						<p className="text-md md:text-lg lg:text-2xl 2xl:text-3xl text-justify text-blackCustom leading-loose">
							{/* {summary} */}
							{/* {instructions} */}
							<br />
						</p>
					</div>

					{/* Servings */}
					<div
						style={{ padding: "30px 0" }}
						className="bg-rose-200 w-5/6 h-fit flex items-start justify-center"
					>
						<p className="text-md md:text-lg lg:text-2xl 2xl:text-3xl text-justify text-blackCustom leading-loose">
							{/* Portions for {servings} servings. Ready in: $readyInMInutes 
							{prepTimeMinutes} min. [icon] Gluten Free [icon] Vegan */}
							<br />
						</p>
					</div>

					{/* Ingredients */}
					<div
						style={{ padding: "30px 0" }}
						className="bg-green-200 w-5/6 h-fit flex items-start justify-start font-bold"
					>
						<h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
							Ingredients
						</h3>
					</div>
					{/* Ingredients List */}
					<div
						style={{ padding: "30px 0" }}
						className="bg-rose-200 w-5/6 h-fit flex items-start justify-center"
					>
						<ul className="text-lg md:text-2xl lg:text-3xl 2xl:text-4xl text-justify text-blackCustom">
                            {/* {extendedIngredients.map((ingredient) => (
                                <li key={ingredient.id}>{ingredient.nameClean} {ingredient.original}</li>
                            ))}  */}
                        </ul>
					</div>
				</div>
			</div>
		</>
		// <section>
		// 	<img src={image} alt={name} />
		// 	<h2>{name}</h2>
		// 	<p>{id}</p>
		// 	<Link to="/" onClick={() => navigate(-1)}>
		// 		Back Home
		// 	</Link>
		// </section>
	);
};
