import HiglightCard from "@/components/ui/HiglightCard";
import SectionContainer from "@/components/ui/SectionContainer";
import React from "react";
import * as motion from "motion/react-client";

function Highlights() {
	return (
		<SectionContainer title={"Highlights of Edstaq’s Learning Network"}>
			<div className="flex flex-col items-center">
				<motion.p
					initial={{ opacity: 0 }}
					transition={{ duration: 1.5, delay: 0.5 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-sm w-4/6 text-center">
					A growing education ecosystem trusted by students, parents,
					and tutors across Kerala — empowering learning with quality
					resources and expert guidance.
				</motion.p>
			</div>

			<div className="flex justify-center flex-wrap gap-6 lg:gap-5 md:gap-4 sm:gap-3 mt-12">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					transition={{ duration: 1, delay: 0.2 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}>
					<HiglightCard
						title={"10K+"}
						sub={"Study Materials"}
						desc={
							"Access digital notes, question papers, and learning resources created by expert tutors for Kerala State and CBSE syllabuses."
						}
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					transition={{ duration: 1, delay: 0.6 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}>
					<HiglightCard
						title={"8K+"}
						sub={"Edstaq Users"}
						desc={
							"Students and parents already discovering smarter, faster, and more personalized learning experiences with Edstaq."
						}
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					transition={{ duration: 1, delay: 1 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}>
					<HiglightCard
						title={"100+"}
						sub={"Trusted Tutors"}
						desc={
							"Experienced teachers offering live classes, test preparation, and one-on-one support in English and Malayalam."
						}
					/>
				</motion.div>
			</div>
		</SectionContainer>
	);
}

export default Highlights;
