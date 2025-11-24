"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";

function NavItem({ data, nested = false, setDrawerOpen }) {
	const [isMobile, setIsMobile] = useState(null);
	const [stack, setStack] = useState([data]);

	const currentMenu = stack[stack.length - 1];

	const pathname = usePathname();

	useEffect(() => {
		setIsMobile(window.innerWidth < 768);

		const handleSize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener("resize", handleSize);
		return () => {
			window.addEventListener("resize", handleSize);
		};
	}, []);

	const goForward = (nav) => {
		if (nav?.sub?.length > 0) {
			setStack((prev) => [...prev, nav?.sub]);
		} else {
			isMobile && setDrawerOpen(false);
		}
	};

	const goBack = () => {
		setStack((prev) => prev.slice(0, -1));
	};

	return (
		<>
			{stack?.length > 1 && (
				<motion.button
					onClick={goBack}
					className="absolute top-3 left-3 text-sm bg-blue-100 text-bl-300 p-2 rounded-sm"
					whileTap={{ scale: 0.9 }}>
					Back
				</motion.button>
			)}
			{currentMenu?.map((nav, i) => (
				<motion.li
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: i * 0.1 }}
					key={i}
					className="relative">
					<Link
						onClick={() => {
							goForward(nav);
						}}
						href={nav?.path || "#"}
						className={`peer flex items-center text-sm font-[500] py-2 text-gray-700 hover:text-bl-25 transition ${
							nav.path === pathname &&
							"border-b-2 border-b-bl-200"
						} ${
							nav.path === pathname &&
							isMobile &&
							"bg-bl-100 text-wh py-3 "
						}
				${isMobile && "pl-3"}`}>
						{nav?.label}
						{nav?.sub && nav?.sub.length > 0 && (
							<span className={`ml-auto mr-4`}>
								{nested || isMobile ? (
									<ChevronRight size={16} />
								) : (
									<ChevronDown size={16} />
								)}
							</span>
						)}
					</Link>

					{nav?.sub && nav?.sub.length > 0 && !isMobile && (
						<ul
							className={`absolute z-20 shadow-md rounded-sm p-2 transition-all duration-300 bg-white min-w-[200px] pointer-events-none opacity-0 peer-hover:opacity-100 peer-hover:pointer-events-auto hover:opacity-100 hover:pointer-events-auto ${
								nested ? "left-full top-0" : "left-0 top-full"
							}`}>
							<NavItem key={i} data={nav?.sub} nested isMobile />
						</ul>
					)}
				</motion.li>
			))}
		</>
	);
}

export default NavItem;
