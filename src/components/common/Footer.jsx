import { extraLinks, linkSet1, linkSet2 } from "@/lib/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterForm from "../foams/FooterForm";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaThreads, FaXTwitter } from "react-icons/fa6";

function Footer() {
	return (
		<footer className="w-full bg-bk text-[#bbbbbb] py-16">
			<div className="container grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 lg:gap-4">
				<section>
					<div className="relative mb-4 w-[190] lg:w-[180] md:w-[170] sm:w-[160] aspect-[4/1] sm:aspect-[5/1]">
						<Link href={"/"}>
							<Image
								src={"/logo-footer.png"}
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								className="object-contain"
								alt="logo"
								priority
							/>
						</Link>
					</div>
					<p className="text-sm leading-7 mb-6">
						Edstaq is Kerala’s fastest-growing online learning
						platform for Kerala State and CBSE students. we make
						learning smarter through live classes, performance
						tracking, and our neuroscience-powered Neurostaq System.
					</p>
					<address className="border-t">
						<p className="text-sm my-2">
							green valley, Tirurkkad, Malappuram, Kerala - 679321
						</p>
						<p className="text-sm my-2">edstaq@gmail.com</p>
						<p className="text-sm my-2">+91 7510 2040 21</p>
					</address>
				</section>
				<section className="sm:mt-6">
					<h6 className="text-base font-[600] text-wh mb-6 lg:mb-5">
						Courses
					</h6>
					<nav aria-label="Footer Navigation">
						<ul>
							{linkSet1?.map((link, i) => (
								<li key={i} className="my-2">
									<Link
										href={link.path}
										className="footer-link text-sm">
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</section>
				<section className="md:mt-6">
					<h6 className="text-base font-[600] text-wh mb-6 lg:mb-5">
						Career
					</h6>
					<nav aria-label="Footer Navigation">
						<ul>
							{linkSet2?.map((link, i) => (
								<li key={i} className="my-2">
									<Link
										href={link.path}
										className="footer-link text-sm">
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</section>
				<section className="lg:mt-6">
					<h6 className="text-base font-[600] text-wh mb-6 lg:mb-5">
						Connect With Us
					</h6>
					<p className="text-sm mb-2">
						Stay connected with Edstaq for updates, offers, and
						success stories.
					</p>
					{/* email input and button */}

					<FooterForm />

					{/* social media icons */}
					<div className="flex items-center gap-5">
						<Link
							href={"https://www.instagram.com/edstaq"}
							target="_blank">
							<FaInstagram
								className="social-icon"
								role="icon"
								aria-label="Instagram icon"
							/>
						</Link>
						<Link
							href={
								"https://www.facebook.com/profile.php?id=61577742274256"
							}
							target="_blank">
							<FiFacebook
								role="icon"
								aria-label="Facebook icon"
								className="social-icon"
							/>
						</Link>
						<Link
							href={"https://www.linkedin.com/company/edstaq/"}
							target="_blank">
							<FiLinkedin
								role="icon"
								aria-label="Linkedin icon"
								className="social-icon"
							/>
						</Link>
						<Link
							href={"https://x.com/edstaq?s=21"}
							target="_blank">
							<FaXTwitter
								role="icon"
								aria-label="Twitter icon"
								className="social-icon"
							/>
						</Link>
						<Link
							href={"https://www.threads.com/@edstaq?igshid=NTc4MTIwNjQ2YQ=="}
							target="_blank">
							<FaThreads
								role="icon"
								aria-label="Thread icon"
								className="social-icon"
							/>
						</Link>
				
					</div>
					<Link
						href={
							"https://play.google.com/store/apps/details?id=com.asrgroup.cuguide"
						}
						target="_blank">
						<Image
							src={"/playstore.png"}
							alt="get it on playstore"
							width={207}
							height={65}
							className="w-30 mt-6"
						/>
					</Link>
				</section>
			</div>
			<div className="container h-0.5 bg-gray-800 my-6"></div>
			<div className="container mb-8">
				{extraLinks?.map((li, i) => (
					<Link
						href={li.path}
						key={i}
						className="px-6 border-r border-r-gray-700 footer-link text-xs/7">
						{li.label}
					</Link>
				))}
			</div>
			<div className="container">
				<small>
					&copy; 2025 Edstaq. All Rights Reserved. | Empowering
					Smarter Learning for Every Student.
				</small>
			</div>
		</footer>
	);
}

export default Footer;
