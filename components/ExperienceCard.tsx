import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
	return (
		<article className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px] ">
			{/* TODO: replace img with next image component */}
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
				src="https://c.s-microsoft.com/en-us/CMSImages/ImgOne.jpg?version=D418E733-821C-244F-37F9-DC865BDEFEC0"
				alt=""
			/>

			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light">CEO of Rocks Inc.</h4>
				<p className="mt-1 text-2xl font-bold">Rocks Inc.</p>
				<div className="my-2 flex space-x-2">
					<img
						className="h-10 w-10 rounded-full"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png?20221110153201"
						alt=""
					/>
					<img
						className="h-10 w-10 rounded-full"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png?20221110153201"
						alt=""
					/>
					<img
						className="h-10 w-10 rounded-full"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png?20221110153201"
						alt=""
					/>
				</div>
				<p className="py-5 uppercase text-gray-300">
					Started work... - Ended...
				</p>
				<ul className="ml-5 list-disc space-y-4 text-lg">
					<li>
						Summary points Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Sit eos molestias labore. Reprehenderit aliquid dicta
						obcaecati rem. Ullam aut quis repellat, quos porro officia sequi
						eius? Ab omnis culpa repellat!
					</li>
					<li>
						Summary points Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Sit eos molestias labore. Reprehenderit aliquid dicta
						obcaecati rem. Ullam aut quis repellat, quos porro officia sequi
						eius? Ab omnis culpa repellat!
					</li>
					<li>
						Summary points Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Sit eos molestias labore. Reprehenderit aliquid dicta
						obcaecati rem. Ullam aut quis repellat, quos porro officia sequi
						eius? Ab omnis culpa repellat!
					</li>
				</ul>
			</div>
		</article>
	);
}
