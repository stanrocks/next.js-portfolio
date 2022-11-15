import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
	return (
		<header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-5 xl:items-center">
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className="flex flex-row items-center">
				{/* Social Icons */}
				<SocialIcon
					fgColor="gray"
					bgColor="transparent"
					url="https://linkedin.com/in/stanrocks/"
				/>
				<SocialIcon
					fgColor="gray"
					bgColor="transparent"
					url="https://github.com/stanrocks"
				/>
				<SocialIcon
					fgColor="gray"
					bgColor="transparent"
					url="https://t.me/Jesus_Dafuq_Le_Bombom"
				/>
			</motion.div>

			<motion.div
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className="flex cursor-pointer flex-row items-center text-gray-300">
				<SocialIcon
					url="#contact"
					className="cursor-pointer"
					network="email"
					fgColor="gray"
					bgColor="transparent"
				/>
				<Link href="#contact">
					<p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
						Get In Touch
					</p>
				</Link>
			</motion.div>
		</header>
	);
}
