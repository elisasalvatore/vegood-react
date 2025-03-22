import { useEffect } from "react";

export const Head = ({ id, title, summary, image }) => {
	const pageTitle = title ? `${title} | Vegood` : "Vegood";
	const pageDescription =
		summary ||
		"Discover the best vegetarian recipes on Vegood. From nutritious breakfasts to indulgent desserts, we have everything to satisfy your palate in an ethical way.";
	const pageImage =
		image ||
		"https://vegood-react.netlify.app/assets/images/vegood-preview.png";
	const pageUrl = id
		? `https://vegood-react.netlify.app/recipes/${id}`
		: "https://vegood-react.netlify.app/";
	const faviconUrl = "https://vegood-react.netlify.app/assets/favicon.ico";

	useEffect(() => {
		document.title = pageTitle;

		const metaTags = [
			{ name: "description", content: pageDescription },
			{ name: "image", content: pageImage },
			{ name: "url", content: pageUrl },
			{ property: "og:title", content: pageTitle },
			{ property: "og:description", content: pageDescription },
			{ property: "og:image", content: pageImage },
			{ property: "og:image:alt", content: pageTitle },
			{ property: "og:image:width", content: "1200" },
			{ property: "og:image:height", content: "630" },
			{ property: "og:url", content: pageUrl },
			{ property: "og:type", content: "website" },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: pageTitle },
			{ name: "twitter:description", content: pageDescription },
			{ name: "twitter:image", content: pageImage },
			{ name: "twitter:image:alt", content: pageTitle },
			{ name: "twitter:image:width", content: "1200" },
			{ name: "twitter:image:height", content: "630" },
			{ name: "twitter:url", content: pageUrl },
			{ name: "twitter:type", content: "website" },
		];

		metaTags.forEach(({ name, property, content }) => {
			let element = document.querySelector(
				`meta[${name ? "name" : "property"}="${name || property}"]`
			);

			if (!element) {
				element = document.createElement("meta");
				if (name) element.setAttribute("name", name);
				if (property) element.setAttribute("property", property);
				document.head.appendChild(element);
			}

			element.setAttribute("content", content);
		});

		// Aggiorna o crea il tag della favicon
		let favicon = document.querySelector('link[rel="icon"]');
		if (!favicon) {
			favicon = document.createElement("link");
			favicon.setAttribute("rel", "icon");
			favicon.setAttribute("type", "image/x-icon");
			document.head.appendChild(favicon);
		}
		favicon.setAttribute("href", faviconUrl);

		console.log("Updated meta tags:", {
			pageTitle,
			pageDescription,
			pageImage,
			pageUrl,
		});

		// Pulizia dei meta tag se il componente viene smontato (opzionale)
		return () => {
			metaTags.forEach(({ name, property }) => {
				const element = document.querySelector(
					`meta[${name ? "name" : "property"}="${name || property}"]`
				);
				if (element) document.head.removeChild(element);
			});
		};
	}, [pageTitle, pageDescription, pageImage, pageUrl]);

	return null; // Nessun elemento visibile, modifichiamo solo l'head
};
