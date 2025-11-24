"use client";
import { LoaderCircle } from "lucide-react";
import React from "react";

function CustomButton({ children, className, onClick, type, loading }) {
	return (
		<button
			onClick={onClick}
			type={type}
			className={`text-sm cursor-pointer font-[400] bg-bl-100 text-wh py-2 px-8 lg:px-7 md:px-6 sm:px-5 rounded-4xl ${className} bg-gradient-to-br from-bl-100 via-bl-200 to-bl-300 
             shadow-[0_4px_8px_rgba(0,0,0,0.4)] 
             hover:translate-y-[2px] hover:shadow-[0_2px_4px_rgba(0,0,0,0.5)] 
             transition-all duration-300 ease-in-out ${loading ? "pointer-events-none opacity-60" : ""}`}>
			{loading ? (
				<LoaderCircle className="animate-spin" size={22} />
			) : (
				children
			)}
		</button>
	);
}

export default CustomButton;
