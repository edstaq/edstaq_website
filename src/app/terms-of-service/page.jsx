import SectionContainer from '@/components/ui/SectionContainer';
import React from 'react';
import { meta } from '@/utils/metadata';

export const metadata = meta(
	"Terms of Service",
	"The terms for using edstaq.com and EDSTAQ's online tuition services.",
	"terms-of-service"
);

function TermsOfService() {
	return (
		<SectionContainer>
			<div className="max-w-3xl mx-auto py-12 space-y-6">
				<h1 className="text-3xl font-semibold">Terms of Service</h1>
				<p className="text-sm text-gray-500">Last updated: 12 November 2026</p>

				<p>
					These terms apply when you use edstaq.com, our tools and our online tuition services. By using
					the website or booking a class, you agree to these terms. EDSTAQ is based in Angadipuram,
					Perinthalmanna, Kerala, India.
				</p>

				<h2 className="text-xl font-semibold pt-4">1. Our services</h2>
				<p>
					EDSTAQ provides one-to-one online tuition for students in classes 1 to 12 (State, CBSE and
					ICSE). We may describe classes, subjects, timings and fees on the website. Details are confirmed
					when you enrol.
				</p>

				<h2 className="text-xl font-semibold pt-4">2. Demo classes and enrolment</h2>
				<p>
					A demo class is booked by contacting us through the website or WhatsApp. Demo timings depend on
					availability. Enrolment, fees and payment terms are agreed separately and confirmed in writing
					before classes begin.
				</p>

				<h2 className="text-xl font-semibold pt-4">3. Your responsibilities</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Give accurate information when you enquire, book or enrol.</li>
					<li>A parent or guardian must agree to these terms on behalf of a child.</li>
					<li>Keep login details and class links private and do not share them with others.</li>
					<li>Do not copy, resell or redistribute our lesson material or recordings without permission.</li>
				</ul>

				<h2 className="text-xl font-semibold pt-4">4. Our content</h2>
				<p>
					The text, images, videos, logos and other material on edstaq.com belong to EDSTAQ or its
					licensors. You may view and share pages for personal use, but not reuse them commercially
					without our written permission.
				</p>

				<h2 className="text-xl font-semibold pt-4">5. Results</h2>
				<p>
					We work to help every student learn and improve. We cannot guarantee specific exam results or
					grades, because learning depends on many factors, including effort and attendance.
				</p>

				<h2 className="text-xl font-semibold pt-4">6. Limitation of liability</h2>
				<p>
					To the extent the law allows, EDSTAQ is not liable for indirect or consequential losses arising
					from the use of the website or the internet connection needed for online classes.
				</p>

				<h2 className="text-xl font-semibold pt-4">7. Changes</h2>
				<p>
					We may change these terms or our services. The updated terms apply from the date they are posted
					on this page.
				</p>

				<h2 className="text-xl font-semibold pt-4">8. Governing law</h2>
				<p>
					These terms are governed by the laws of India. Courts in Kerala, India have jurisdiction over any
					dispute, subject to applicable law.
				</p>

				<h2 className="text-xl font-semibold pt-4">9. Contact us</h2>
				<p>
					EDSTAQ, Angadipuram, Perinthalmanna, Kerala 679321, India.
					<br />
					Phone: +91 7510 2040 21 (Mon–Sat, 9 am to 8 pm)
				</p>
			</div>
		</SectionContainer>
	);
}

export default TermsOfService;
