import { Geist, Geist_Mono, Poppins, Patrick_Hand } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/free-mode";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import SplashScreen from "@/components/common/Splash";
import SmoothScrollLayout from "@/components/common/SmoothScrollLayout";
import MouseGradient from "@/components/ui/MouseGradient";
import { Toaster } from "react-hot-toast";
import Image from "next/image";
import TrackedLink from "@/components/common/TrackedLink";
import Script from "next/script";
import { SITE } from "@/lib/seo-config";
import { META_PIXEL_ID } from "@/lib/meta-pixel";

// Google Analytics 4 (property "edstaq.com", stream "edstaq website")
const GA_ID = "G-EVPB0YYXWY";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const patric = Patrick_Hand({
	variable: "--font-patric-hand",
	subsets: ["latin"],
	weight: ["400"],
});

export const metadata = {
	metadataBase: new URL(SITE.url),
	title: {
		default: `${SITE.name} - Empowering Students with Smarter Learning & Live Tuition`,
		template: `%s | ${SITE.name}`,
	},
	description: SITE.desc,
	applicationName: SITE.siteName,
	alternates: {
		canonical: "/",
	},
	keywords: [
		"online tuition Kerala",
		"CBSE tuition classes",
		"Kerala State syllabus tuition",
		"best online learning platform",
		"live classes for students",
		"Edstaq",
	],
	verification: {
		// Two Search Console owners: the original one, and EDSTAQ's own account (added 2026-11-10)
		google: [
			"ellmOUzPR6ldQ_EK-E75TexiM3bmRxJGQj2N_kYm6Do",
			"QXyYNsnJwSuxPweS7050GnPuCa3eiLGsumyjiVbVhAo",
		],
	},
	openGraph: {
		title: SITE.name,
		description: SITE.desc,
		url: SITE.url,
		siteName: SITE.siteName,
		images: [
			{
				url: `${SITE.url}/api/og?title=${encodeURIComponent(
					SITE.name
				)}&description=${encodeURIComponent(SITE.desc)}`,
				width: 1200,
				height: 630,
				alt: SITE.name,
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: SITE.name,
		description: SITE.desc,
		creator: SITE.twitter,
		images: [
			`${SITE.url}/api/og?title=${encodeURIComponent(
				SITE.name
			)}&description=${encodeURIComponent(SITE.desc)}`,
		],
	},
	// icons: {
	// 	icon: "/favicon.ico",
	// },
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={` ${poppins.variable} ${patric.variable} font-poppins antialiased`}>
				<Toaster position="top-center" reverseOrder={true} />
				<noscript>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						height="1"
						width="1"
						style={{ display: "none" }}
						alt=""
						src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
					/>
				</noscript>
				{/* <SplashScreen /> */}
				<main className="min-h-screen bg-[#566e6e ">
					<Navbar />
					{/* <MouseGradient /> */}
					{children}
					<TrackedLink
						source="whatsapp_click"
						href={
							"https://wa.me/917510204021?text=Hello, I would like to know more about this platform."
						}
						target="_blank"
						className="fixed z-50 bottom-5 right-5 lg:right-10 md:right-5 sm:-right-5 sm:bottom-0 animate-bounce">
						<Image
							src="/WhatsApp.png"
							alt="whatsapp icon"
							width={120}
							height={120}
							loading="lazy"
						/>
					</TrackedLink>
					<Footer />
				</main>
			</body>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
				strategy="afterInteractive"
			/>
			<Script id="ga4-init" strategy="afterInteractive">
				{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
			</Script>
			{/* Meta Pixel (Facebook/Instagram ads measurement) */}
			<Script id="meta-pixel" strategy="afterInteractive">
				{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
			</Script>
			<SmoothScrollLayout />
		</html>
	);
}
