import Accordian from "@/components/ui/Accordian";
import SectionContainer from "@/components/ui/SectionContainer";
import { faqsData } from "@/lib/faqs";
import Image from "next/image";
import React from "react";

function Faqs() {
	return (
		<SectionContainer
			title={"Frequently Asked Questions (FAQ) – Edstaq & Neurostaq"}
			bg={"bg-red-100"}>
			<div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
				<div className=" w-full h-full">
					<Image
						src="/faq.png"
						alt="faq"
						width={1080}
						height={720}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-contain rounded-2xl md:rounded-lg"
						loading="lazy"
					/>
				</div>

				<div>
					<Accordian data={faqsData} />
				</div>
			</div>
		</SectionContainer>
	);
}

export default Faqs;
