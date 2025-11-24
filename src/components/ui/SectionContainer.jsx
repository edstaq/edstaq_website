import React from "react";
import * as motion from 'motion/react-client'

function SectionContainer({ children, title, bg }) {
	return (
		<section className={`w-full py-12 lg:py-10 md:py-4 sm:py-3 ${bg}`}>
			<div className="container">
				{title && (
					<motion.div
					initial={{opacity: 0, y:  25}}
					whileInView={{opacity: 1, y: 0}}
					transition={{duration: 1, delay: 0.3}}
					viewport={{once: true}}
					className="text-center">
						<h2 className="highlight-heading font-[600] ">
							{title}
						</h2>
					</motion.div>
				)}
				<div className="mt-8">{children}</div>
			</div>
		</section>
	);
}

export default SectionContainer;
