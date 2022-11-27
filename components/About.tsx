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
			className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 sm:px-10 xl:max-w-7xl"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}>
			<h3 className="-mr-[14px] select-none pt-24 pb-8 text-center text-xl uppercase tracking-[14px] text-gray-500 sm:-mr-[20px] sm:text-2xl sm:tracking-[20px] landscape:pt-8">
				About
			</h3>
			<div className="flex flex-col items-center md:flex-row md:items-center">
				<motion.div
					className="hidden shrink-0 sm:block "
					initial={{
						x: -200,
						opacity: 0,
					}}
					transition={{
						duration: 1.2,
						delay: 2.5,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					viewport={{
						once: true,
					}}>
					<Image
						className="mb-8 h-56 w-56 rounded-full object-cover md:mr-10 md:rounded-lg xl:h-[500px] xl:w-[500px] xl:rounded-lg"
						src={urlFor(pageInfo?.profilePic).url()}
						alt={pageInfo?.name}
						width={500}
						height={500}
						priority
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1.5, delay: 1 }}>
					<h4 className="pb-8 text-center text-2xl font-semibold sm:text-4xl md:text-left xl:text-center">
						Here is a{" "}
						<span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
						background
					</h4>
					<p className="text-left text-base">
						{pageInfo?.backgroundInformation}
					</p>
				</motion.div>
			</div>
		</motion.div>
	);
}
