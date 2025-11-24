import React from "react";
import { navData } from "@/lib/navigation";
import NavItem from "../ui/NavItem";
import Image from "next/image";
import Link from "next/link";
import MenuButton from "../ui/MenuButton";
import RegisterFormWithBtn from "../foams/RegisterFormWithBtn";

function Navbar() {
	return (
		<header className="container py-3 flex items-center justify-between">
			<MenuButton data={navData} />

			<Link
				href={"/"}
				className="relative w-[200] lg:w-[180] md:w-[170] sm:w-[160] aspect-[3/1] sm:aspect-[4/1]">
				<Image
					src={"/logo-nav.png"}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-contain"
					alt="logo"
					priority
				/>
			</Link>

			<nav className="md:hidden">
				<ul className="flex space-x-10">
					<NavItem data={navData} />
				</ul>
			</nav>
			<RegisterFormWithBtn />
		</header>
	);
}

export default Navbar;
