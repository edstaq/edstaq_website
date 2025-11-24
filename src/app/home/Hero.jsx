import SectionContainer from "@/components/ui/SectionContainer";
import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
import RegisterFormWithBtn from "@/components/foams/RegisterFormWithBtn";
import Link from "next/link";
function Hero() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			transition={{ duration: 1.8 }}
			animate={{ opacity: 1 }}>
			<SectionContainer>
				<div className="flex relative">
					<div className="flex-1/3">
						<motion.h1
							initial={{ opacity: 0, y: 50 }}
							transition={{ duration: 1.5 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-xxl font-[600] leading-15 lg:leading-13 md:leading-12 md:text-center mb-6 hero-title">
							Empowering Students with Smarter Learning & Live
							Tuition
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 50 }}
							transition={{ duration: 1.5, delay: 1.2 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-sm leading-7 mb-6 md:text-center">
							Join Kerala’s most trusted online learning network —
							connecting students, teachers, and study materials
							in one place. Learn better, remember longer, and
							achieve more with Edstaq.
						</motion.p>
						<motion.div
							className="flex md:justify-center space-x-4 md:pb-3"
							initial={{ opacity: 0 }}
							transition={{ duration: 1.5, delay: 2 }}
							animate={{ opacity: 1 }}>
							<RegisterFormWithBtn />
							{/* <Link href={""} target="_blank">
								<Image
									src={"/playstore.png"}
									alt="get it on playstore"
									width={207}
									height={65}
									className="w-30"
								/>
							</Link> */}
						</motion.div>
					</div>

					<div className=" flex-2 md:hidden">
						<div className="relative w-full h-[400px] flex justify-center overflow-hidden rounded-xl">
							<Image
								src="/hero.png"
								alt="hero image"
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								priority
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-wh via-transparent to-transparent"></div>
						</div>
					</div>
				</div>
			</SectionContainer>
		</motion.div>
	);
}

export default Hero;
