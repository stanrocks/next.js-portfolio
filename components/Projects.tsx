import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
	projects: Project[];
};

function Projects({ projects }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row">
			<h3 className="absolute top-24 -mr-[20px] text-2xl uppercase tracking-[20px] text-gray-500">
				Projects
			</h3>

			<div className="relative z-20 flex w-full snap-x snap-mandatory overflow-x-scroll scrollbar overflow-y-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
				{projects.map((project, i) => (
					<div className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44">
						{/* TODO: replace img to proper next img component */}
						<motion.img
							initial={{ y: -300, opacity: 0 }}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							height={"400px"}
							width={"400px"}
							src={urlFor(project?.image).url()}
						/>

						<div className="max-w-6xl space-y-10 px-0 md:px-10">
							<h4 className="text-center text-4xl font-semibold">
								<span className="underline decoration-[#F7AB0A]/50">
									Case Study {i + 1} of {projects.length}:
								</span>{" "}
								{project?.title}
							</h4>

							<div className="flex items-center justify-center space-x-2">
								{project?.technologies.map((technology) => (
									<img
										className="h-10 w-10"
										key={technology._id}
										src={urlFor(technology.image).url()}
										alt=""
									/>
								))}
							</div>

							<p className="text-center text-lg md:text-left">
								{project?.summary}
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="absolute top-[30%] left-0 h-[60%] w-full -skew-y-12 bg-[#F7AB0A]/10"></div>
		</motion.div>
	);
}

export default Projects;
