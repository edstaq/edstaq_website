import SectionContainer from '@/components/ui/SectionContainer';
import React from 'react';
import { meta } from '@/utils/metadata';

export const metadata = meta(
	"Privacy Policy",
	"How EDSTAQ collects, uses and protects personal information, including data from Google services.",
	"privacy-policy"
);

function PrivacyPolicy() {
	return (
		<SectionContainer>
			<div className="max-w-3xl mx-auto py-12 space-y-6">
				<h1 className="text-3xl font-semibold">Privacy Policy</h1>
				<p className="text-sm text-gray-500">Last updated: 12 November 2026</p>

				<p>
					EDSTAQ is a 1:1 online tuition platform for students in classes 1 to 12 (State, CBSE and ICSE),
					based in Angadipuram, Perinthalmanna, Kerala, India. This policy explains what personal
					information we collect when you visit edstaq.com, book a demo class, contact us, or use our
					tools, and how we use it.
				</p>

				<h2 className="text-xl font-semibold pt-4">1. Information we collect</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						<strong>Details you give us:</strong> name, parent or student name, phone number, WhatsApp
						number, class and board, and any message you send through our contact forms, demo booking or
						WhatsApp.
					</li>
					<li>
						<strong>Website usage:</strong> pages visited, device and browser type, approximate location
						(country or region) and similar technical information, collected through Google Analytics.
					</li>
					<li>
						<strong>Tools on our site:</strong> when you use an online academic diagnostic tool, the
						answers and contact details you enter are stored so that our team can follow up with you.
					</li>
				</ul>

				<h2 className="text-xl font-semibold pt-4">2. How we use it</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>To reply to your enquiries and book demo classes.</li>
					<li>To arrange tuition, share class schedules and send information about our courses.</li>
					<li>To understand how the website is used, so we can improve it.</li>
					<li>To send you service messages related to your enrolment or enquiry.</li>
				</ul>
				<p>
					We do not sell your personal information. We do not use it for any purpose other than those
					listed above.
				</p>

				<h2 className="text-xl font-semibold pt-4">3. Google user data</h2>
				<p>
					EDSTAQ uses Google APIs (YouTube Data API and YouTube Analytics API) to read analytics and
					comment data for the EDSTAQ YouTube channel. Our use of information received from Google APIs
					follows the{' '}
					<a
						className="underline"
						href="https://developers.google.com/terms/api-services-user-data-policy"
						target="_blank"
						rel="noopener noreferrer">
						Google API Services User Data Policy
					</a>
					, including the Limited Use requirements. We use this data only to report on the channel's
					performance and to manage comments for our own channel. We do not share it with third parties,
					and we do not use it to serve advertising.
				</p>

				<h2 className="text-xl font-semibold pt-4">4. Sharing</h2>
				<p>
					We share information only with service providers that help us run the website and communicate
					with you (for example hosting, Google Analytics and our form and messaging tools), and only as
					needed for those services. We may disclose information when the law requires it.
				</p>

				<h2 className="text-xl font-semibold pt-4">5. Keeping your information safe</h2>
				<p>
					We use reasonable technical and organisational measures to protect personal information. No
					online service is completely secure, so please share only what is needed.
				</p>

				<h2 className="text-xl font-semibold pt-4">6. How long we keep it</h2>
				<p>
					We keep enquiry and enrolment details for as long as they are needed for the purpose above, and
					for any period required by law. You can ask us to delete your information at any time.
				</p>

				<h2 className="text-xl font-semibold pt-4">7. Children</h2>
				<p>
					Our services are for students, who are usually children. We collect information about a child
					only from a parent or guardian, who is responsible for providing it.
				</p>

				<h2 className="text-xl font-semibold pt-4">8. Your choices</h2>
				<p>
					You can ask us to see, correct or delete your information, or to stop messages from us, at any
					time. You can also block cookies in your browser, although some parts of the site may not work
					as expected.
				</p>

				<h2 className="text-xl font-semibold pt-4">9. Changes to this policy</h2>
				<p>
					We may update this policy. The date at the top shows when it was last changed.
				</p>

				<h2 className="text-xl font-semibold pt-4">10. Contact us</h2>
				<p>
					EDSTAQ, Angadipuram, Perinthalmanna, Kerala 679321, India.
					<br />
					Phone: +91 7510 2040 21 (Mon–Sat, 9 am to 8 pm)
				</p>
			</div>
		</SectionContainer>
	);
}

export default PrivacyPolicy;
