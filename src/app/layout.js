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
import Link from "next/link";
import { SITE } from "@/lib/seo-config";

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
		google: "ellmOUzPR6ldQ_EK-E75TexiM3bmRxJGQj2N_kYm6Do",
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
				{/* <SplashScreen /> */}
				<main className="min-h-screen bg-[#566e6e ">
					<Navbar />
					{/* <MouseGradient /> */}
					{children}
					<Link
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
					</Link>
					<Footer />
				</main>
			</body>
			<SmoothScrollLayout />
		</html>
	);
}
