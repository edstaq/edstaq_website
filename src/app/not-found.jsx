import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
	return (
		<section className="container grid grid-cols-2 sm:grid-cols-1 pb-6">
			<div className="relative h-100">
				<Image
					src={"/404-bulb.png"}
					fill
					alt={"page not found image"}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-contain"
				/>
			</div>
			<div className="flex flex-col justify-center sm:items-center">
				<h2 className="text-bl-100 font-[700] text-xxxl mb-6">404</h2>
				<h5 className="text-basse font-[500] mb-2 uppercase">Looks like you're lost</h5>
				<p className="text-sm text-gray-500">The page you are looking for not available!</p>
				<Link href={"/"} className="underline uppercase mt-7 font-[500] text-base">Go to home</Link>
			</div>
		</section>
	);
}
