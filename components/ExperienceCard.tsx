import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
	return (
		<article className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px] ">
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}>
				<Image
					className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
					src={urlFor(experience?.companyImage).url()}
					alt={experience?.company}
					width={200}
					height={200}
				/>
			</motion.div>

			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light">CEO of Rocks Inc.</h4>
				<p className="mt-1 text-2xl font-bold">Rocks Inc.</p>
				<div className="my-2 flex space-x-2">
					{experience.technologies.map((technology) => (
						<Image
							key={technology._id}
							className="h-10 w-10 rounded-full"
							width={40}
							height={40}
							src={urlFor(technology.image).url()}
							alt={technology.title}
						/>
					))}
				</div>
				<p className="py-5 uppercase text-gray-300">
					{new Date(experience.dateStarted).toDateString()} -{" "}
					{experience.isCurrentlyWorkingHere
						? "Present"
						: new Date(experience.dateEnded).toDateString()}
				</p>
				<ul className="ml-5 list-disc space-y-4 text-lg">
					{/* TODO: proper unique id for a key */}
					{experience.points.map((point, i) => (
						<li key={i}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	);
}
