import React from "react";
import SectionContainer from "@/components/ui/SectionContainer";
import TestimonialCurousel from "@/components/TestimonialCurousel";
import * as motion from "motion/react-client";

function Testimonials() {
	
	return (
		<SectionContainer title={"What Our Students and Parents Say"}>
			<div className="flex flex-col items-center mb-3">
				<motion.p
					initial={{ opacity: 0 }}
					transition={{ duration: 1.5, delay: 0.5 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-sm w-4/6 text-center">
					Thousands of learners and parents across Kerala trust Edstaq
					to make learning simple, personalized, and result-driven.
				</motion.p>
			</div>
			<TestimonialCurousel />
		</SectionContainer>
	);
}

export default Testimonials;
