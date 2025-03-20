import React from "react";
import { Helmet } from "react-helmet";

export const SEORecipe = ({ id, title, summary, image }) => {
	return (
		<Helmet
			title={`${title} | Vegood`}
			htmlAttributes={{ lang: "en", icon: "../assets/favicon.ico" }}
			meta={[
				{
					name: `description`,
					content: summary,
				},
				// OG TAGS
				{
					property: "og:title",
					content: title,
				},
				{
					property: "og:description",
					content: summary,
				},
				{
					property: "og:image",
					content: image,
				},
                {
					property: "og:image:width",
					content: "536",
				},
                {
					property: "og:image:height",
					content: "270",
				},
                {
					property: "og:image:type",
					content: "image/png",
				},
                {
					property: "og:image:alt",
					content: `${title}'s image`,
				},
				{
					property: "og:url",
					content: `https://vegood-react.netlify.app/recipes/${id}`,
				},
				// TWITTER TAGS
				{
					property: "twitter:title",
					content: title,
				},
                {
					property: "twitter:card",
					content: "summary_large_image",
				},
				{
					property: "twitter:image",
					content: image,
				},
			]}
		/>
	);
};
