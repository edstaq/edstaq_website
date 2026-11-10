import { SITE } from "@/lib/seo-config";

// Public pages for Google. Add every new public page here.
const PAGES = [
	{ path: "/", priority: 1.0, changeFrequency: "weekly" },
	{ path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
	{ path: "/contact-us", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap() {
	const lastModified = new Date();
	return PAGES.map(({ path, priority, changeFrequency }) => ({
		url: new URL(path, SITE.url).toString(),
		lastModified,
		changeFrequency,
		priority,
	}));
}
