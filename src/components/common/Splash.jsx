"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function SplashScreen() {
	const [showSplash, setShowSplash] = useState(true);
	const [fadeout, setFadeout] = useState(false);

	useEffect(() => {
		const hasSeenSplash = sessionStorage.getItem("seenSplash");

		if (hasSeenSplash) {
			setShowSplash(false);
		} else {
			setTimeout(() => {
				setFadeout(true);
			}, 1500);

			setTimeout(() => {
				setShowSplash(false);
				sessionStorage.setItem("seenSplash", true);
			}, 2000);
		}
	}, []);
	if (showSplash) {
		return (
			<div
				className={`fixed z-10 inset-0 flex items-center justify-center bg-bl-300 text-white text-3xl font-bold transition-opacity duration-500${
					fadeout ? "opacity-0" : "opacity-100"
				}`}>
				<div className="relative w-full h-[300px] md:h-[250px]">
					<Image
						src="/splash.png"
						alt="splash image"
						fill
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-contain"
					/>
				</div>
			</div>
		);
	}
	return null;
}

export default SplashScreen;
