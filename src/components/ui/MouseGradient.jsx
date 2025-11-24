"use client";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";
function MouseGradient({
	size = 400,
	color1 = "rgba(56, 189, 248, 0.2)", 
	color2 = "rgba(59, 130, 246, 0.2)", 
}) {
	const x = useMotionValue(0);
	const y = useMotionValue(0);


	const springX = useSpring(x, { stiffness: 40, damping: 80 });
	const springY = useSpring(y, { stiffness: 40, damping: 80 });

	useEffect(() => {
		const handleMove = (e) => {
			x.set(e.clientX);
			y.set(e.clientY);

		};

		window.addEventListener("mousemove", handleMove);

		return () => {
			window.removeEventListener("mousemove", handleMove);
		};
	}, [x, y]);



	return (
		<motion.div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: size,
				height: size,
				borderRadius: "50%",
				background: `radial-gradient(circle, ${color1}, ${color2}, transparent 90%)`,
				pointerEvents: "none",
				zIndex: 0,
				x: springX,
				y: springY,
				translateX: `-50%`,
				translateY: `-50%`,
				filter: "blur(50px)",
			}}
		/>
	);
}

export default MouseGradient;
