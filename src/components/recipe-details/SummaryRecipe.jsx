import React from "react";
import DOMPurify from "dompurify";
import { LuVegan, LuWheatOff } from "react-icons/lu";

export const SummaryRecipe = ({glutenFree, vegan, summary}) => {
    const summaryHTML = DOMPurify.sanitize(summary);
	return (
		<>
			{/* START SECTION ---- Summary description */}
			{/* [icon] Gluten Free [icon] Vegan */}
			<div className="w-5/6 h-[60px] flex items-center justify-end text-paleGreenCustom text-sm md:text-base 2xl:text-2xl font-semibold">
				{vegan ? (
					<div
						style={{ marginRight: "10px" }}
						className="flex items-center justify-end"
					>
						<LuVegan />
						<p style={{ marginLeft: "10px" }}>Vegan</p>
					</div>
				) : (
					" "
				)}

				{glutenFree ? (
					<div
						style={{ marginLeft: "10px" }}
						className="flex items-center justify-end"
					>
						<LuWheatOff />
						<p style={{ marginLeft: "10px" }}>Gluten Free</p>
					</div>
				) : (
					" "
				)}
			</div>

			{/* START TITLE ---- Summary title */}
			<section style={{ padding: "40px 0" }} className="w-5/6 h-fit font-bold">
				<h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-orangeCustom">
					Summary
				</h3>
			</section>
			{/* END TITLE ---- Summary title */}

			{/* START PARAGRAPH ---- Summary p */}
			<div className="w-5/6 h-fit flex items-start justify-center">
				<p
					dangerouslySetInnerHTML={{ __html: summaryHTML }}
					className="text-md md:text-lg lg:text-2xl 2xl:text-3xl text-justify text-blackCustom leading-loose"
				>
					{/* content from dangerouslySetInnerHTML */}
				</p>
			</div>
			{/* END PARAGRAPH ---- Summary p */}
			{/* END SECTION ---- Summary description */}
		</>
	);
};
