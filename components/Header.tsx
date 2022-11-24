import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
	socials: Social[];
};

export default function Header({ socials }: Props) {
	return (
		<header className="sticky top-0 z-20 mx-auto flex max-w-6xl justify-between p-5 xl:items-center">
			{/*  */}
			<motion.div
				className="flex flex-row items-center"
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
				}}>
				{/* Social Icons */}
				{socials.map((social) => (
					<SocialIcon
						key={social._id}
						fgColor="gray"
						bgColor="transparent"
						url={social.url}
					/>
				))}
			</motion.div>

			<motion.div
				className="flex cursor-pointer flex-row items-center text-gray-300"
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
				}}>
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
