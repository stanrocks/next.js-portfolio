import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
	return (
		<motion.div
			className="absolute inset-0 flex h-screen items-center justify-center"
			initial={{
				opacity: 0,
			}}
			animate={{
				scale: [1, 2, 2, 3, 1],
				opacity: [0.2, 0.2, 0.4, 0.8, 1.0],
				borderRadius: ["20%", "20%", "50%", "80%", "20%"],
			}}
			transition={{
				duration: 2.5,
			}}>
			<div className="absolute aspect-square h-2/6 animate-ping rounded-full border border-[#333333] " />
			<div className="absolute aspect-square h-3/6 animate-ping rounded-full border border-[#3333333] " />
			<div className="absolute aspect-square h-5/6 animate-ping rounded-full border border-[#3333333] " />
			<div className="absolute aspect-square h-3/5 animate-pulse rounded-full border border-[#F7AB0A] opacity-20" />
			<div className="absolute aspect-square h-5/6 animate-pulse rounded-full border border-[#F7AB0A] opacity-20" />
		</motion.div>
	);
}

export default BackgroundCircles;
