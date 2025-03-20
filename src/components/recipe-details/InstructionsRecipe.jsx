import React from "react";
import DOMPurify from "dompurify";

export const InstructionsRecipe = ({instructions}) => {
        const instructionsHTML = DOMPurify.sanitize(instructions);
	return (
		<>
			{/* START SECTION ---- Instructions title */}
			<section style={{ padding: "40px 0" }} className="w-5/6 h-fit font-bold">
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
		</>
	);
};
