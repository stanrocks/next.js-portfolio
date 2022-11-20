import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type Props = {};

function ContactMe({}: Props) {
	// Using react-hook-form to handle form submission
	// https://react-hook-form.com/get-started
	const { register, handleSubmit } = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		console.log(formData);
		// Temporary solution: send mail using mail client in user OS
		// TODO: implement email sending with EmailJS (https://www.emailjs.com/)
		window.location.href = `mailto: somemail@gmail.com?subject=${formData.subject}&body=Hi, my name is${formData.name}. ${formData.message} (${formData.email})`;
	};

	return (
		<div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
			<h3 className="absolute top-24 -mr-[20px] text-2xl uppercase tracking-[20px] text-gray-500">
				Contact
			</h3>

			<div className="flex flex-col space-y-10">
				<h4 className="text-center text-4xl font-semibold">
					I have got just what you need.{" "}
					<span className="underline decoration-[#F7AB0A]/50">
						Let&apos;s talk.
					</span>
				</h4>

				<div className="space-y-10">
					<div className="flex items-center justify-center space-x-5">
						<PhoneIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
						<p className="text-2xl">+1234567890</p>
					</div>

					<div className="flex items-center justify-center space-x-5">
						<EnvelopeIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
						<p className="text-2xl">stanrocksmail@gmail.com</p>
					</div>

					<div className="flex items-center justify-center space-x-5">
						<MapPinIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
						<p className="text-2xl">
							Currently Astana, Kazakhstan. Available World Wide.
						</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="mx-auto flex w-fit flex-col space-y-2 ">
					<div className="flex space-x-2">
						<input
							className="contactInput"
							type="text"
							placeholder="Name"
							{...register("name")}
						/>
						<input
							className="contactInput"
							type="email"
							placeholder="Email"
							{...register("email")}
						/>
					</div>

					<input
						className="contactInput"
						type="text"
						placeholder="Subject"
						{...register("subject")}
					/>

					<textarea
						className="contactInput"
						placeholder="Message"
						{...register("message")}
					/>
					<button
						type="submit"
						className="rounded-md bg-[#F7AB0A] py-5 px-10 text-lg font-bold text-black">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default ContactMe;
