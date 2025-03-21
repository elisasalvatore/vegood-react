import React, { useEffect } from "react";
import { useMetaTags } from "react-metatags-hook";

export const Head = ({ id, title, summary, image }) => {
	// Usa i valori passati come props o i valori di default
	const pageTitle = title || "Vegood";
	const pageDescription =
		summary ||
		"Discover the best vegetarian recipes on Vegood. From nutritious breakfasts to indulgent desserts, we have everything to satisfy your palate in an ethical way.";
	const pageImage =
		image ||
		"https://vegood-react.netlify.app/assets/images/vegood-preview.png";
	const pageUrl = id
		? `https://vegood-react.netlify.app/recipes/${id}`
		: "https://vegood-react.netlify.app/";

	useMetaTags({
		charset: "utf8",
		lang: "en",
		links: [
			{ rel: "canonical", href: pageUrl },
			{
				rel: "icon",
				type: "image/ico",
				href: "https://vegood-react.netlify.app/assets/favicon.ico",
			},
		],
		title: pageTitle,
		description: pageDescription,
		image: pageImage,
		url: pageUrl,
		type: "website",
		twitter: {
			card: "summary_large_image",
			title: pageTitle,
			description: pageDescription,
			image: pageImage,
		},
		openGraph: {
			title: pageTitle,
			description: pageDescription,
			image: pageImage,
			url: pageUrl,
			type: "website",
		},
	});

    useEffect(() => {
		console.log("Updating meta tags with:", {
			title: pageTitle,
			description: pageDescription,
			image: pageImage,
			url: pageUrl,
		});
	}, [pageTitle, pageDescription, pageImage, pageUrl]);
	return <></>; // Nessun contenuto da renderizzare, solo meta tags
};