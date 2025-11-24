import { SITE } from "@/lib/seo-config";

export const meta = (title, description,url) => {
	return {
		title,
		description,
		alternates: {
			canonical: url,
		},

		openGraph: {
			title: `${title} - ${SITE.name}`,
			description,
			url: `${SITE.url}${url}`,
			siteName: SITE.siteName,
			images: [
				{
					url: `${SITE.url}/api/og?title=${encodeURIComponent(
						title
					)}&description=${encodeURIComponent(description)}`,
					width: 1200,
					height: 630,
					alt: `${SITE.name}-${title}`,
				},
			],
			locale: "en_US",
			type: "website",
		},

		twitter: {
			card: "summary_large_image",
			title: `${title} - ${SITE.name}`,
			description,
			images: [
				`${SITE.url}/api/og?title=${encodeURIComponent(
					title
				)}&description=${encodeURIComponent(description)}`,
			],
		},

		robots: {
			index: true,
			follow: true,
			nocache: false,
		},

		authors: [{ name: SITE.name, url: SITE.url }],

		creator: SITE.name,
		publisher: SITE.name,
		category: "Education Technology",
	};
};