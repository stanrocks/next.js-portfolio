import React from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
// import profilePic from "../public/assets/me.jpg";

type Props = {};

export default function About({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
			<h3 className="absolute top-24 -mr-[20px] text-2xl uppercase tracking-[20px] text-gray-500">
				About
			</h3>
			{/* TODO: change motion.img to motion + next/image. And image link - to local (?) */}
			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				viewport={{
					once: true,
				}}
				src="https://media-exp1.licdn.com/dms/image/D4E03AQHkwC3TtBDt4A/profile-displayphoto-shrink_800_800/0/1664961030970?e=1673481600&v=beta&t=-urmTYJe624e2r89CSi5RCR6EeJpSpk1zrZmdWGJZUM"
				className="x-56 md:h-95 -mb-20 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:w-64 md:rounded-lg xl:h-[500px] xl:w-[500px]"
			/>

			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here is a{" "}
					<span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
					background
				</h4>
				<p className="text-base">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex
					nostrum necessitatibus cupiditate ipsam inventore obcaecati eos! Ea
					mollitia molestiae accusantium quasi pariatur est modi illum! Maiores
					dolorum hic nulla.
				</p>
			</div>
		</motion.div>
	);
}
