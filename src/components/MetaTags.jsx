import React from "react";
import { Helmet } from "react-helmet";

export const MetaTags = ({ title, summary, image }) => {
	return (
		<Helmet>
			{/* Standard metadata tags */}
			<title>{title}</title>
			<link rel="canonical" href={window.location.href} />
			<meta name="description" content={summary} />
			{/* Open Graph tags (OG) */}
			<meta property="og:url" content={window.location.href} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={summary} />
			{/* OG image tags */}
			<meta property="og:image" content={image} />
			<meta property="og:image:secure_url" content={image} />
			<meta property="og:image:type" content="image/jpeg" />
			<meta property="og:image:width" content="536" />
			<meta property="og:image:height" content="270" />
			<meta property="og:image:alt" content={`${title} / Vegood`} />
			{/* Twitter tags */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={summary} />
		</Helmet>
	);
};
