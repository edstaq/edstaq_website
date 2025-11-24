'use client'
import React, { useState } from "react";
import CustomButton from "../ui/CustomButton";
import RegisterFormModal from "./RegisterFormModal";
import { MoveRight } from "lucide-react";

function RegisterFormWithBtn() {
    const [isModalOpen, setIsModalOpen] = useState(false)

	const handleModal = () => {
		setIsModalOpen(true)
	}
	return (
		<>
			<CustomButton
				onClick={handleModal}
				className={"flex items-center gap-2"}>
				Join <MoveRight className="sm:hidden" size={16} />
			</CustomButton>
			<RegisterFormModal
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
			/>
		</>
	);
}

export default RegisterFormWithBtn;
