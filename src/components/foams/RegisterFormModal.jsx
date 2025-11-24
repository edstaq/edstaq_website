"use client";
import React, { useState } from "react";
import * as motion from "motion/react-client";
import CustomInput from "../ui/CustomInput";
import CustomButton from "../ui/CustomButton";
import { X } from "lucide-react";
import Toast from "@/utils/Toast";

function RegisterFormModal({ isModalOpen, setIsModalOpen }) {
	const [formData, setFormData] = useState({
		name: "",
		place: "",
		email: "",
		purpose: "",
		phone: "",
		whatsapp: "",
	});

	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Toast("hello world", "error");
		try {
			setIsLoading(true);
			const res = await fetch(
				`https://script.google.com/macros/s/AKfycbwUPzGhpHbfdDmwkyZvVRpLdV50V5U7HKttMHy32V6n7AcUD08wS76b4P4ZUScMmqz2/exec?Name=${encodeURIComponent(
					formData.name
				)}&Place=${encodeURIComponent(formData.place)}&Email=${
					formData.email
				}&Purpose=${encodeURIComponent(
					formData.purpose
				)}&Phone=${encodeURIComponent(
					formData.phone
				)}&WhatsApp=${encodeURIComponent(formData.whatsapp)}`
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
						place: "",
						email: "",
						purpose: "",
						phone: "",
						whatsapp: "",
					});
					setIsModalOpen(false);
				}, 1000);
			}
		} catch (err) {
			setIsLoading(false);
			Toast("Somthing went wrong, Please try again", "error");
		}
	};
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.5 }}
				exit={{ opacity: 0 }}
				className={`fixed inset-0 bg-black z-10 ${
					isModalOpen ? "block" : "hidden"
				}`}></motion.div>
			<div
				className={`fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-5  sm:flex-col items-center justify-center w-full h-full ${
					isModalOpen ? "flex" : "hidden"
				}`}>
				{/* form div */}
				<motion.div
					initial={{ opacity: 0, translateX: -20 }}
					transition={{ duration: 0.5 }}
					whileInView={{ opacity: 1, translateX: 0 }}
					className="relative bg-white w-3/6 lg:w-4/6 md:w-5/6 sm:w-full h-fit shadow-2xl rounded-2xl sm:rounded-md z-10 p-10 md:p-7 sm:px-3 sm:py-6 sm:overflow-y-scroll">
					<button
						onClick={() => setIsModalOpen(false)}
						className="absolute top-3 right-3 bg-blue-100 text-bl-300 p-2 rounded-full">
						<X size={16} />
					</button>
					<h2 className="text-md font-[600] text-center mb-5">
						Join with us
					</h2>
					<form
						onSubmit={handleSubmit}
						className="grid grid-cols-2 gap-4 sm:gap-3 sm:grid-cols-1">
						<CustomInput
							required={true}
							label={"Name"}
							placeHolder={"Eg. Jhon Doe"}
							type={"text"}
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
							label={"Place"}
							placeHolder={"Eg. Calicut"}
							type={"text"}
							value={formData.place}
							onChange={(e) => {
								setFormData({
									...formData,
									place: e.target.value,
								});
							}}
						/>
						<CustomInput
							required={true}
							label={"Email"}
							placeHolder={"Eg. jhon@example.com"}
							type={"email"}
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
							label={"Purpose"}
							placeHolder={"Eg. Tution inquiry"}
							type={"text"}
							value={formData.purpose}
							onChange={(e) => {
								setFormData({
									...formData,
									purpose: e.target.value,
								});
							}}
						/>
						<CustomInput
							required={true}
							label={"Phone"}
							placeHolder={"9800000000"}
							type={"number"}
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
							label={"WhatsApp"}
							placeHolder={"9800000000"}
							type={"number"}
							value={formData.whatsapp}
							onChange={(e) => {
								setFormData({
									...formData,
									whatsapp: e.target.value,
								});
							}}
						/>
						<CustomButton
							loading={isLoading}
							type={"submit"}
							className={"mt-2 rounded-md w-fit"}>
							join
						</CustomButton>
					</form>
				</motion.div>

				{/* abstract div */}
				<motion.div
					initial={{ opacity: 0, translateX: 20 }}
					transition={{ duration: 0.5 }}
					whileInView={{ opacity: 1, translateX: -50 }}
					className="relative w-2/6 lg:w-3/6 md:absolute h-full md:h-5/6 sm:hidden bg-linear-[148deg] from-[#F9E7F7] from-0% via-[#F7A29B] via-50% to-[#6C5BDF] to-100% shadow-2xl rounded-2xl">
					<motion.div
						animate={{ x: 50, y: 0 }}
						transition={{
							duration: 4,
							repeat: Infinity,
							repeatType: "reverse",
						}}
						className="size-28 rounded-full bg-radial-[at_25%_25%] from-white to-[#F7A29B] to-75% shadow-lg absolute top-3 left-5 opacity-50"></motion.div>
					<motion.div
						animate={{ x: 0, y: 50 }}
						transition={{
							duration: 5,
							repeat: Infinity,
							repeatType: "reverse",
						}}
						className="size-20 rounded-full bg-radial-[at_25%_25%] from-white to-[#ED7E8F] to-75% shadow-lg absolute top-1/2 left-3/5 opacity-30"></motion.div>
					<motion.div
						animate={{ x: -50, y: 0 }}
						transition={{
							duration: 4,
							repeat: Infinity,
							repeatType: "reverse",
						}}
						className="size-32 rounded-full bg-radial-[at_25%_25%] from-white to-[#6C5BDF] to-75% shadow-lg absolute bottom-3 right-5 opacity-50"></motion.div>
					<div className="absolute pl-14 pr-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full join-title md:hidden">
						<h2 className="text-xl font-[600] text-center">
							Welcome to Edstaq – Empowering Learning Across
							Kerala!
						</h2>
						<p className="text-center !text-bk">
							Join our growing community of 8,000+ learners, 100+
							tutors, and a passionate sales team. Whether you
							want to learn, teach, or grow with us, Edstaq
							connects you to real opportunities in education and
							career development.
						</p>
					</div>
				</motion.div>
			</div>
		</>
	);
}

export default RegisterFormModal;
