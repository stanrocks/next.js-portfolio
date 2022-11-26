import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
	return (
		// old style:
		// flex w-[500px] flex-shrink-0 snap-center flex-col items-center overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]
		<article className="relative flex w-full flex-shrink-0 flex-col items-center overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[512px] xl:w-[768px]">
			<motion.div
				className="absolute hidden self-end md:block xl:-mt-5 xl:-mr-5"
				initial={{ y: -200, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}>
				{/* old style */}
				{/* h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px] */}
				<Image
					className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
					src={urlFor(experience?.companyImage).url()}
					alt={experience?.company}
					width={200}
					height={200}
				/>
			</motion.div>

			<div className="px-0 lg:px-10">
				<h4 className="pb-4 text-4xl font-light">{experience.jobTitle}</h4>
				<p className="pb-4 text-2xl font-bold">{experience.company}</p>
				<div className="flex space-x-2 pb-4">
					{experience.technologies.map((technology) => (
						<Image
							className="h-10 w-10 rounded-full"
							// TODO: proper unique id for a key
							key={technology._id}
							width={40}
							height={40}
							src={urlFor(technology.image).url()}
							alt={technology.title}
						/>
					))}
				</div>
				<p className="pb-4 uppercase text-gray-300">
					{/* TODO: use semantic <time> tag */}
					{experience.dateStarted} -{" "}
					{experience.isCurrentlyWorkingHere ? "Present" : experience.dateEnded}
				</p>
				<ul className="ml-5 list-disc">
					{/* TODO: proper unique id for a key */}
					{experience.points.map((point, i) => (
						<li key={i}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	);
}
