import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
	experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
	return (
		// old style
		//relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row
		<motion.div
			className="relative flex min-h-screen max-w-full flex-col items-center justify-evenly overflow-hidden sm:px-10"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}>
			{/* old style */}
			{/* absolute top-24 -mr-[20px] text-2xl uppercase tracking-[20px] text-gray-500 */}
			<h3 className="-mr-[14px] select-none pt-24 pb-8 text-center text-xl uppercase tracking-[14px] text-gray-500 sm:-mr-[20px] sm:text-2xl sm:tracking-[20px]">
				Experience
			</h3>

			{/* old style */}
			{/*  flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 */}
			<div className="flex max-w-full flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5 md:overflow-x-scroll md:scrollbar-thin md:scrollbar-track-gray-400/20 md:scrollbar-thumb-[#F7AB0A]/80 min-[2000px]:justify-center">
				{experiences?.map((experience) => (
					<ExperienceCard
						key={experience._id}
						experience={experience}
					/>
				))}
			</div>
		</motion.div>
	);
}

export default WorkExperience;
