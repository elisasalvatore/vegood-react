import axios from "axios";
import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
//components
import { BackHomeBtn } from "../components/buttons/BackHomeBtn";
import { ScrollTopBtn } from "../components/buttons/ScrollTopBtn";

export const RecipeDetails = () => {
	const [recipe, setRecipe] = useState({});
	const { id } = useParams();
	const API_URL_RECIPE_DETAILS = `https://api.spoonacular.com/recipes/${id}/information`;
	const API_KEY = import.meta.env.VITE_APP_API_KEY; //Spoonacular API KEY

	useEffect(() => {
		const getRecipeDetails = async () => {
			const res = await axios.get(
				`${API_URL_RECIPE_DETAILS}?apiKey=${API_KEY}`
			);
			const data = res.data;
			setRecipe(data);
		};
		getRecipeDetails();
	}, []);

	const {
		image,
		title,
		summary,
		servings,
		readyInMinutes,
		extendedIngredients,
		instructions,
	} = recipe;

	const summaryHTML = DOMPurify.sanitize(summary);
	const instructionsHTML = DOMPurify.sanitize(instructions);

	return (
		<>
			{/* Back to home Button */}
			<BackHomeBtn />
			{/* Scroll to top Button */}
			<ScrollTopBtn />

			{/* START HERO IMAGE - Image recipe full screen */}
			<div
				className="w-screen h-100 md:h-screen bg-center bg-no-repeat bg-cover brightness-100 flex items-end justify-center"
				style={{ backgroundImage: `url(${image})` }}
			>
				<div className="w-5/6 h-[60%] bg-whiteCustom flex items-center justify-center">
					{/* START SECTION ---- Recipe title */}
					<section
						className="w-5/6 h-6/6 border-b-3 border-lightGreenCustom flex items-center justify-center"
					>
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

			{/* START MAIN CONTAINER - Recipe details (green one) */}
			<div
				style={{ paddingBottom: "60px" }}
				className="w-6/6 bg-mintGreenCustom flex items-center justify-center"
			>
				{/* START INNER CONTAINER - Recipe details (white one) */}
				<div
					style={{ paddingBottom: "60px" }}
					// className="w-5/6 bg-whiteCustom flex flex-col items-center justify-between relative md:-top-70 lg:-top-60 2xl:-top-125"
					// className="w-5/6 h-[100%] bg-whiteCustom flex flex-col items-center justify-between absolute md:-top-70 lg:-top-100 2xl:-top-150"
					className="w-5/6 h-[100%] bg-whiteCustom flex flex-col items-center justify-between"
				>

					{/* START SECTION ---- Summary description */}
					<section
						style={{ padding: "60px 0" }}
						className="w-5/6 h-fit flex items-start justify-center"
					>
						{/* START PARAGRAPH ---- Summary p */}
						<p
							dangerouslySetInnerHTML={{ __html: summaryHTML }}
							className="text-md md:text-lg lg:text-2xl 2xl:text-3xl text-justify text-blackCustom leading-loose"
						>
							{/* content from dangerouslySetInnerHTML */}
						</p>
						{/* END PARAGRAPH ---- Summary p */}
					</section>
					{/* END SECTION ---- Summary description */}

					{/* START SECTION ---- Servings */}
					<section className="w-5/6 h-fit flex items-start justify-start">
						{/* START PARAGRAPH ---- Serving p */}
						<p className="text-md md:text-lg lg:text-2xl 2xl:text-3xl text-justify text-blackCustom leading-loose">
							Portions for {servings} servings. Ready in {readyInMinutes} min.
							[icon] Gluten Free [icon] Vegan
							<br />
						</p>
						{/* END PARAGRAPH ---- Serving p */}
					</section>
					{/* END SECTION ---- Servings */}

					{/* START SECTION ---- Ingredients title */}
					<section
						style={{ padding: "60px 0" }}
						className="w-5/6 h-fit font-bold"
					>
						{/* START TITLE ---- Ingredients title */}
						<h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-orangeCustom">
							Ingredients
						</h3>
						{/* END TITLE ---- Ingredients title */}
					</section>
					{/* END SECTION ---- Ingredients title */}

					{/* START SECTION ---- Ingredients list */}
					<div className="w-5/6 h-fit flex items-start justify-start">
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

					{/* START SECTION ---- Instructions title */}
					<section
						style={{ padding: "60px 0" }}
						className="w-5/6 h-fit font-bold"
					>
						{/* START TITLE ---- Instructions title */}
						<h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-orangeCustom">
							Instructions
						</h3>
						{/* END TITLE ---- Instructions title */}
					</section>
					{/* END SECTION ---- Instructions title */}

					{/* START SECTION ---- Instructions section */}
					<section className="w-5/6 h-fit flex items-start justify-center">
						{/* START PARAGRAPH ---- Instructions p */}
						<p
							dangerouslySetInnerHTML={{ __html: instructionsHTML }}
							id="content-instructions"
							className="text-md md:text-lg lg:text-2xl 2xl:text-3xl text-justify text-blackCustom leading-loose"
						>
							{/* content from dangerouslySetInnerHTML */}
						</p>
						{/* END PARAGRAPH ---- Instructions p */}
					</section>
					{/* END SECTION ---- Instructions section */}
				</div>
				{/* END INNER CONTAINER - Recipe details (white one) */}
			</div>
			{/* END MAIN CONTAINER - Recipe details (green one) */}
		</>
	);
};
