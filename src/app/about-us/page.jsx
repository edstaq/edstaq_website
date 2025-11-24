import CustomButton from '@/components/ui/CustomButton';
import SectionContainer from '@/components/ui/SectionContainer';
import React from 'react'
import * as motion from 'motion/react-client'
import { meta } from '@/utils/metadata';

export const metadata = meta(
	"About Us",
	"Track your child’s focus, subject-wise progress, and learning patterns using Neurostaq’s AI dashboard. Gain real-time insights for better academic support.",
	"about-us"
);
function AboutUs() {
  return (
		<SectionContainer>
			<div className="flex items-start gap-5 lg:flex-col-reverse">
				<div className="flex-3 lg:flex-1 flex flex-wrap">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						transition={{ duration: 0.6 }}
						animate={{ opacity: 1, scale: 1 }}
						whileHover={{ scale: 1.1 }}
						className="bg-green-300 rounded-2xl m-4 w-full min-w-50 flex-1 h-80"></motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						animate={{ opacity: 1, scale: 1 }}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.6, delay: 0 },
						}}
						className="bg-pink-300 rounded-2xl m-4 w-full min-w-50 flex-2 h-80"></motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						animate={{ opacity: 1, scale: 1 }}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.6, delay: 0 },
						}}
						className="bg-amber-300 rounded-2xl m-4 w-full min-w-50 flex-2 h-80"></motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						animate={{ opacity: 1, scale: 1 }}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.6, delay: 0 },
						}}
						className="bg-blue-300 rounded-2xl m-4 w-full min-w-50 flex-1 h-80"></motion.div>
				</div>
				<div className="flex-2 lg:flex-1">
					<motion.p
						initial={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						animate={{ opacity: 1 }}
						className="uppercase text-sm text-bl-50 font-[500] tracking-[4px]">
						a bit
					</motion.p>
					<motion.h1
						initial={{ opacity: 0, y: 50 }}
						transition={{ duration: 0.6 }}
						animate={{ opacity: 1, y: 0 }}
						className="uppercase text-xxl font-[600] mb-4">
						about us
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 50 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-sm text-gray-500 leading-7">
						Empowering Students to Learn Smarter, Faster, and
						Better Welcome to Edstaq, Kerala’s leading online
						tuition and learning platform designed to help students
						excel in academics and achieve long-term success.
						Founded in 2020, Edstaq stands for Education Students
						Acquisition — a mission-driven initiative to connect
						learners with expert tutors, innovative learning tools,
						and high-quality study materials.
						<br />
						<br />
						At Edstaq, we believe that every student deserves
						personalized, affordable, and effective learning
						support. Whether your child follows the Kerala State
						Syllabus or CBSE, our platform ensures they receive the
						right guidance through live tuition classes, smart
						revision tools, and scientifically designed memory
						techniques.
						<br />
						<br />
						🎯 <b>Our Mission</b> <br /> To empower students at
						every stage of their educational journey by delivering
						accessible learning experiences, connecting them with
						qualified educators, and providing quality academic
						resources that help them grow confidently — all through
						a technology-driven ecosystem.
					</motion.p>
					<motion.div
						initial={{ opacity: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						animate={{ opacity: 1 }}>
						<CustomButton className={"mt-12"}>
							Explore More
						</CustomButton>
					</motion.div>
				</div>
			</div>
		</SectionContainer>
  );
}

export default AboutUs