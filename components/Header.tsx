import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";
import { classNames } from "../utils/classNames";

type Props = {
	socials: Social[];
	isVisible: boolean;
};

export default function Header({ socials, isVisible }: Props) {
	return (
		<div
			className={classNames(
				isVisible ? "opacity-100" : "opacity-0",
				"fixed top-0 z-30 w-screen select-none bg-gradient-to-b from-[#202020] pb-20 font-light transition-opacity	duration-1000"
			)}>
			<header className="mx-auto flex max-w-6xl justify-between p-5 xl:items-center">
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
						delay: 3,
					}}>
					{/* Social Icons */}
					{socials.map((social) => (
						<SocialIcon
							className="hover:sepia "
							key={social._id}
							fgColor="gray"
							bgColor="transparent"
							url={social.url}
						/>
					))}
				</motion.div>

				<motion.div
					className="anim group flex animate-pulse cursor-pointer flex-row items-center text-gray-300"
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
						delay: 4,
					}}>
					<SocialIcon
						url="#contact"
						className="cursor-pointer group-hover:sepia"
						network="email"
						fgColor="gray"
						bgColor="transparent"
					/>
					<Link href="#contact">
						<p className="text-shadow hidden uppercase tracking-widest text-gray-500 group-hover:text-[#F7AB0A]/40 sm:text-sm sm:tracking-[0.3em] md:inline-flex">
							Get In Touch
						</p>
					</Link>
				</motion.div>
			</header>
		</div>
	);
}
