"use client";
import CustomButton from "@/components/ui/CustomButton";
import CustomInput from "@/components/ui/CustomInput";
import Toast from "@/utils/Toast";
import * as motion from "motion/react-client";
import { useState } from "react";

function ContactusForam() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		phone: "",
		message: "",
	});

	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			const res = await fetch(
				`https://script.google.com/macros/s/AKfycbwUPzGhpHbfdDmwkyZvVRpLdV50V5U7HKttMHy32V6n7AcUD08wS76b4P4ZUScMmqz2/exec?Name=${encodeURIComponent(
					formData.name
				)}&Place=${encodeURIComponent(formData.place)}&Email=${
					formData.email
				}&Subject=${encodeURIComponent(
					formData.subject
				)}&Phone=${encodeURIComponent(
					formData.phone
				)}&Message=${encodeURIComponent(formData.message)}`
			);

			if (res.ok) {
				setTimeout(() => {
					setIsLoading(false);
				}, 500);

				Toast(
					"Thank you for your interest! we will get back to you soon",
					"success"
				);

				setTimeout(() => {
					setFormData({
						name: "",
						email: "",
						subject: "",
						phone: "",
						message: "",
					});
				}, 1000);
			}
		} catch (err) {
			setIsLoading(false);
			Toast("Somthing went wrong, Please try again", "error");
		}
	};
	return (
		<motion.form
			initial={{ opacity: 0, y: 50 }}
			transition={{ duration: 0.6, delay: 0.4 }}
			animate={{ opacity: 1, y: 0 }}
			onSubmit={handleSubmit}
			className="flex-3 lg:flex-1 w-full grid grid-cols-2 sm:grid-cols-1 gap-6 md:gap-4 bg-white shadow-2xl p-8 md:p-6 sm:p-4 rounded-2xl sm:rounded-lg">
			<CustomInput
				required={true}
				label={"Name"}
				type={"text"}
				placeHolder={"John Carter"}
				value={formData.name}
				onChange={(e) => {
					setFormData({
						...formData,
						name: e.target.value,
					});
				}}
			/>
			<CustomInput
				required={true}
				label={"Email"}
				type={"email"}
				placeHolder={"jhone@example.com"}
				value={formData.email}
				onChange={(e) => {
					setFormData({
						...formData,
						email: e.target.value,
					});
				}}
			/>
			<CustomInput
				required={true}
				label={"Phone"}
				type={"number"}
				placeHolder={"9900000000"}
				value={formData.phone}
				onChange={(e) => {
					setFormData({
						...formData,
						phone: e.target.value,
					});
				}}
			/>
			<CustomInput
				required={true}
				label={"Subject"}
				type={"text"}
				placeHolder={"Ex. Course"}
				value={formData.subject}
				onChange={(e) => {
					setFormData({
						...formData,
						subject: e.target.value,
					});
				}}
			/>
			<div className="col-span-2 sm:col-span-1">
				<CustomInput
					required={true}
					label={"Message"}
					type={"textarea"}
					placeHolder={"Type your message here...."}
					value={formData.message}
					onChange={(e) => {
						setFormData({
							...formData,
							message: e.target.value,
						});
					}}
				/>
				<CustomButton
					loading={isLoading}
					type={"submit"}
					className={"mt-5 rounded-md"}>
					Send message
				</CustomButton>
			</div>
		</motion.form>
	);
}

export default ContactusForam;
