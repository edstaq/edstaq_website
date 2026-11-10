import { SITE } from "@/lib/seo-config";

export default function robots() {
	return {
		// /api/og must stay crawlable: it makes the link-preview images for WhatsApp, Facebook and X.
		rules: [{ userAgent: "*", allow: "/" }],
		sitemap: new URL("/sitemap.xml", SITE.url).toString(),
		host: new URL(SITE.url).origin,
	};
}
