"use client";
import { Send } from "lucide-react";
import React, { useState } from "react";
import CustomButton from "../ui/CustomButton";
import Toast from "@/utils/Toast";
import { FORM_SUBMIT_URL } from "@/lib/api-config";

function FooterForm() {
	const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit= async(e) => {
        e.preventDefault()
        try {
			setIsLoading(true);
			const res = await fetch(
				`${FORM_SUBMIT_URL}?Email=${
					email
				}`
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
					setEmail("");
				}, 1000);
			}
		} catch (err) {
			setIsLoading(false);
			Toast("Somthing went wrong, Please try again", "error");
		}
    }
	return (
		<form onSubmit={handleSubmit} className="flex items-center gap-2 mb-6">
			<input
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				type="email"
                required
				placeholder="Email"
				className="px-3 py-2 rounded-sm bg-wh text-bk outline-none border-none text-sm w-full"
			/>
			<CustomButton type={"submit"} loading={isLoading} className={"rounded-sm !px-2"}>
				<Send size={22} />
			</CustomButton>
		</form>
	);
}

export default FooterForm;
