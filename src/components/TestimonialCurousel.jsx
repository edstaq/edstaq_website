"use client";
import { testimonial } from "@/lib/testimonial";
import { Quote } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
function TestimonialCurousel() {
	return (
		<Swiper slidesPerView={"auto"} grabCursor={true}>
			{testimonial?.map((test, i) => (
				<SwiperSlide
					className="!w-68 pt-15 pb-10 mx-7 lg:mx-6 md:mx-5 sm:mx-4"
					key={i}>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						animate={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className=" h-86 bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center justify-center relative">
						<Image
							src="/avatar.png"
							alt="profile"
							width={100}
							height={100}
							className="w-20 h-20 z-80 rounded-full absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
						/>

						<h3 className="text-base font-[600]">{test?.name}</h3>
						<p className="text-xs text-center text-gray-500">{test?.subject}</p>
						<Quote className="w-5 h-5 text-cyan-600  rotate-180 my-2" />
						<p className="text-center text-sm text-gray-400 text-wrap line-clamp-8">
							{test?.message}
						</p>
					</motion.div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default TestimonialCurousel;
