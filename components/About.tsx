import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
	pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
			<h3 className="absolute top-24 -mr-[20px] text-2xl uppercase tracking-[20px] text-gray-500">
				About
			</h3>

			<motion.div
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
				}}>
				<Image
					className="x-56 md:h-95 -mb-20 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:w-64 md:rounded-lg xl:h-[500px] xl:w-[500px]"
					src={urlFor(pageInfo?.profilePic).url()}
					alt={pageInfo?.name}
					width={500}
					height={500}
					priority
				/>
			</motion.div>

			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here is a{" "}
					<span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
					background
				</h4>
				<p className="text-base">{pageInfo?.backgroundInformation}</p>
			</div>
		</motion.div>
	);
}
