import ContactusForam from "@/components/foams/ContactusForam";
import SectionContainer from "@/components/ui/SectionContainer";
import { meta } from "@/utils/metadata";
import * as motion from "motion/react-client";

export const metadata = meta(
	"Contact Us",
	"Register on the Edstaq website or app to book your free one-on-one demo class with expert tutors. Experience interactive online learning before you enroll.",
	"contact-us"
);

function page() {
	return (
		<SectionContainer>
			<div className="flex items-start gap-5 md:flex-col">
				<div className="flex-2 lg:flex-1">
					<motion.p
						initial={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						animate={{ opacity: 1 }}
						className="uppercase text-sm text-bl-50 font-[500] tracking-[4px]">
						A touch
					</motion.p>
					<motion.h1
						initial={{ opacity: 0, y: 50 }}
						transition={{ duration: 0.6 }}
						animate={{ opacity: 1, y: 0 }}
						className="uppercase text-xxl font-[600] mb-4">
						contact us
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 50 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-sm text-gray-500 leading-7">
						Let’s Build a Smarter Learning Future Together! <br />
						<br />
						Have questions about our online tuition, demo classes,
						or study materials? The Edstaq team is always happy to
						help students, parents, and educators find the right
						learning solution. Whether you want to book a free
						class, join our tutor network, or become part of our
						sales team — we’re just a message away. <br />
						<br /> 📍 Angadipuram, Perinthalmanna, Kerala - 679321
						<br /> 📞 +91 7510 2040 21 <br /> ✉️ edstaq@gmail.com
						<br /> 🕘 Mon–Sat, 9 am – 8 pm
					</motion.p>
				</div>
				<ContactusForam />
			</div>
		</SectionContainer>
	);
}

export default page;
