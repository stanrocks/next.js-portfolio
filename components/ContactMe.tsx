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
		// old style
		// relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left
		<div className="relative flex min-h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-5 font-light sm:px-10">
			{/* old style */}
			{/* absolute top-24 -mr-[20px] text-2xl uppercase tracking-[20px] text-gray-500 */}
			<h3 className="-mr-[14px] select-none pt-24 pb-8 text-center text-xl uppercase tracking-[14px] text-gray-500 sm:-mr-[20px] sm:text-2xl sm:tracking-[20px]">
				Contact
			</h3>

			<div className="flex flex-col space-y-5">
				<h4 className="pb-4 text-center text-xl font-light sm:text-2xl">
					I have got just what you need.{" "}
					<span className="underline decoration-[#F7AB0A]/50">
						Let&apos;s talk.
					</span>
				</h4>

				<div className="space-y-5">
					<div className="flex items-center space-x-2 sm:justify-center sm:space-x-4">
						<PhoneIcon className="h-7 w-7 shrink-0 animate-pulse text-[#F7AB0A]" />
						<p className="text-base font-light">+1234567890</p>
					</div>

					<div className="flex items-center space-x-2 sm:justify-center sm:space-x-4">
						<EnvelopeIcon className="h-7 w-7 shrink-0 animate-pulse text-[#F7AB0A]" />
						<p className="text-base font-light">stanrocksmail@gmail.com</p>
					</div>

					<div className="flex items-center space-x-2 sm:justify-center sm:space-x-4	">
						<MapPinIcon className="h-7 w-7 shrink-0 animate-pulse text-[#F7AB0A]" />
						<p className="text-base font-light">
							Currently residing at Astana, Kazakhstan. Available World Wide.
						</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="mx-auto flex w-full flex-col space-y-2 pt-5 pb-16 sm:w-auto">
					<div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
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
						className="select-none rounded-md bg-[#F7AB0A] py-5 px-10 text-lg font-normal text-black hover:brightness-105">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default ContactMe;
