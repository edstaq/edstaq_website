"use client";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import * as motion from "motion/react-client";
import NavItem from "./NavItem";
import Image from "next/image";

function MenuButton({ data }) {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleMenu = () => {
		setDrawerOpen((prev) => !prev);
	};

	const handleClose = () => {
		setDrawerOpen((prev) => !prev);
	};

	return (
		<nav className=" relative hidden md:block ">
			{drawerOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.5 }}
					exit={{ opacity: 0 }}
					onClick={handleClose}
					className="fixed top-0 left-0 z-10 w-full h-full bg-black"></motion.div>
			)}
			<div
				className={`bg-white shadow-2xl fixed z-50 top-0 bottom-0 left-0 w-5/7 ${
					!drawerOpen && "translate-x-[-100%]"
				} ease-in-out duration-300`}>
				<motion.button
					onClick={handleClose}
					className="absolute top-3 right-3 bg-blue-100 text-bl-300 p-2 rounded-full"
					whileTap={{ scale: 0.9 }}>
					<X size={20} />
				</motion.button>

				<ul className="mt-13 flex flex-col space-y-3">
					<NavItem data={data} setDrawerOpen={setDrawerOpen}/>
				</ul>
				<Image
					src="/book-imoji.png"
					width={500}
					height={500}
					loading="lazy"
					alt="book-imoji"
					className="object-cover absolute bottom-0 left-1/2 -translate-x-1/2 opacity-60"
				/>
			</div>

			<motion.button
				onClick={handleMenu}
				className=" bg-blue-100 p-2 rounded-md "
				whileTap={{ scale: 0.9 }}>
				<Menu />
			</motion.button>
		</nav>
	);
}

export default MenuButton;
