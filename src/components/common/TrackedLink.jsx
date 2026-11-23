"use client";
import Link from "next/link";
import { trackLead } from "@/lib/meta-pixel";

// A normal Link that also sends the Meta Pixel "Lead" event when clicked.
export default function TrackedLink({ source, onClick, children, ...props }) {
	return (
		<Link
			{...props}
			onClick={(e) => {
				trackLead(source);
				if (onClick) onClick(e);
			}}>
			{children}
		</Link>
	);
}
