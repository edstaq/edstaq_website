"use client";
import { ChevronsUpDown } from "lucide-react";
import React, { useRef, useState } from "react";

function Accordian({ data }) {
	const [openId, setOpenId] = useState(null);

	const handleClick = (i) => {
        setOpenId(openId === i ? null : i);
    };
	return (
		<>
			{data?.map((acc, i) => (
				<div key={i} className="rounded-md overflow-hidden my-2">
					<div
						onClick={() => handleClick(i)}
						className={`flex justify-between items-center gap-5 p-4 cursor-pointer ${
							openId === i ? "bg-bl-100 text-wh" : "bg-white"
						}`}>
						<h3 className="text-sm font-[600]">{acc?.qt}</h3>
						<button>
							<ChevronsUpDown size={18} />
						</button>
					</div>
					<div
						className={`p-4 bg-white text-sm text-gray-500 h-0 py-0 overflow-hidden transition-all duration-300 ${
							openId === i ? "h-auto py-4" : ""
						}`}>
						{acc?.ans}
					</div>
				</div>
			))}
		</>
	);
}

export default Accordian;
