import { featrues } from "@/lib/features";
import Faqs from "./home/Faqs";
import Feature from "./home/Feature";
import Hero from "./home/Hero";
import Highlights from "./home/Highlights";
import Testimonials from "./home/Testimonials";

export default function Home() {
	
	return (
		<div>
			<Hero />
			<Highlights />
			<Testimonials />
			<Feature
				title={featrues[0].title}
				para={featrues[0].para}
				img={featrues[0].img}
			/>
			<Feature
				title={featrues[1].title}
				para={featrues[1].para}
				img={featrues[1].img}
				rtl={true}
			/>
			<Feature
				title={featrues[2].title}
				para={featrues[2].para}
				img={featrues[2].img}
			/>
			<Faqs />
		</div>
	);
}
