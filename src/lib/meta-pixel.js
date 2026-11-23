// Meta (Facebook) Pixel for edstaq.com. Pixel "Edstaq Website Pixel".
// Only the event name and a source label are sent; never names, phone numbers or any form content.
export const META_PIXEL_ID = "1084066450683601";

// Fire the standard "Lead" event. source: "register_form" | "contact_form" | "whatsapp_click"
export function trackLead(source) {
	if (typeof window !== "undefined" && typeof window.fbq === "function") {
		window.fbq("track", "Lead", { content_name: source });
	}
}
