import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = { skills: SkillType[] };

function Skills({ skills }: Props) {
	return (
		// old style
		// relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10
		<motion.div
			className="relative flex min-h-screen max-w-full flex-col items-center overflow-hidden font-light sm:px-10"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}>
			{/* old style */}
			{/* absolute top-24 -mr-[20px] text-2xl uppercase tracking-[20px] text-gray-500 */}
			<h3 className="-mr-[14px] select-none pt-24 pb-8 text-center text-xl uppercase tracking-[14px] text-gray-500 sm:-mr-[20px] sm:text-2xl sm:tracking-[20px]">
				Skills
			</h3>

			{/* old style */}
			{/* absolute top-36 -mr-[3px] text-sm uppercase tracking-[3px] text-gray-500 */}
			<h3 className="-mr-[3px] select-none pt-24 pb-8 text-center uppercase tracking-[3px] text-gray-500">
				Hover over a skill for current proficiency
			</h3>

			{/* old style */}
			{/* grid grid-cols-4 gap-5 */}
			<div className="grid grid-cols-4 gap-5">
				{skills?.slice(0, skills.length / 2).map((skill) => (
					<Skill
						key={skill._id}
						skill={skill}
						directionLeft
					/>
				))}
				{skills?.slice(skills.length / 2, skills.length).map((skill) => (
					<Skill
						key={skill._id}
						skill={skill}
					/>
				))}
			</div>
		</motion.div>
	);
}

export default Skills;
