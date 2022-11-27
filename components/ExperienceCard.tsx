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
		<article className="relative flex w-full flex-shrink-0 flex-col items-center overflow-hidden rounded-lg bg-[#292929] opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[512px] xl:w-[640px]">
			<motion.div
				className="absolute top-5 right-8 sm:top-10 sm:right-8"
				initial={{ y: -200, opacity: 0 }}
				transition={{ duration: 1.2, delay: 0.5 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}>
				{/* old style */}
				{/* h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px] */}
				<Image
					className="rounded-lg object-cover object-center opacity-60 grayscale transition duration-300 hover:opacity-90 hover:grayscale-0 sm:hover:opacity-100"
					src={urlFor(experience?.companyImage).url()}
					alt={experience?.company}
					width={200}
					height={200}
				/>
			</motion.div>

			<div className="w-full p-5 sm:p-10">
				<h4 className="z-1 text-shadow relative mr-[130px] pb-4 text-2xl  sm:mr-[160px] sm:text-3xl">
					{experience.jobTitle}
				</h4>
				<p className="z-1 text-shadow relative mr-[130px] pb-4 text-xl  sm:mr-[160px] sm:text-2xl">
					{experience.company}
				</p>
				<div className="z-1 relative mr-[130px] flex space-x-2 pb-4 sm:mr-[160px]">
					{experience.technologies.map((technology) => (
						<Image
							className=" h-10 w-10 rounded-full"
							// TODO: proper unique id for a key
							key={technology._id}
							width={40}
							height={40}
							src={urlFor(technology.image).url()}
							alt={technology.title}
						/>
					))}
				</div>
				<p className="z-1 text-shadow relative pb-4 text-base ">
					{/* TODO: use semantic <time> tag */}
					{experience.dateStarted} -{" "}
					{experience.isCurrentlyWorkingHere ? "Present" : experience.dateEnded}
				</p>
				<ul className="z-1 text-shadow relative ml-5 list-disc text-base">
					{/* TODO: proper unique id for a key */}
					{experience.points.map((point, i) => (
						<li key={i}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	);
}
