import { SITE } from "@/lib/seo-config";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req) {
	const { searchParams } = new URL(req.url);
	const title = searchParams.get("title") || SITE.name;
	const description = searchParams.get("description") || SITE.desc;

	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					background: "linear-gradient(135deg, #132391, #050f71)",
					color: "white",
					fontSize: 48,
					fontWeight: 700,
					textAlign: "center",
					padding: "80px",
				}}>
				<div style={{ fontSize: 64, marginBottom: "20px" }}>
					{title}
				</div>
				<div
					style={{ fontSize: 28, fontWeight: 400, color: "#cbd5e1" }}>
					{description}
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}
