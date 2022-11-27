import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
	projects: Project[];
};

function Projects({ projects }: Props) {
	return (
		// old style
		// relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row
		<motion.div
			className="relative flex min-h-screen max-w-full flex-col items-center justify-evenly overflow-hidden font-light sm:px-10"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}>
			{/* Background decor */}
			{/* old style */}
			{/* absolute top-[30%] left-0 h-[60%] w-full -skew-y-12 bg-[#F7AB0A]/10 */}
			<div className="absolute top-[30%] left-0 h-[60%] w-full -skew-y-12 bg-[#F7AB0A]/10"></div>
			{/* old style */}
			{/* absolute top-24 -mr-[20px] text-2xl uppercase tracking-[20px] text-gray-500 */}
			<h3 className="-mr-[14px] select-none pt-24 pb-8 text-center text-xl uppercase tracking-[14px] text-gray-500 sm:-mr-[20px] sm:text-2xl sm:tracking-[20px]">
				Projects
			</h3>

			{/* old style */}
			{/* relative z-20 flex w-full snap-x snap-mandatory overflow-x-scroll scrollbar overflow-y-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 */}
			<div className=" flex max-w-full flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5 md:overflow-x-scroll md:scrollbar-thin md:scrollbar-track-gray-400/20 md:scrollbar-thumb-[#F7AB0A]/80 min-[2000px]:justify-center">
				{projects.map((project, i) => (
					// old style
					// flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44
					<div
						className="relative flex w-full flex-shrink-0 flex-col items-center overflow-hidden rounded-lg md:w-[512px] xl:w-[640px]"
						key={project._id}>
						<div className="w-full p-5 sm:p-10">
							<motion.div
								initial={{ y: -100, opacity: 0 }}
								transition={{ duration: 1.2 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}>
								<Image
									className="mx-auto rounded-lg pb-5"
									src={urlFor(project?.image).url()}
									alt={project?.title}
									height={300}
									width={300}
								/>
							</motion.div>

							{/* old style */}
							{/* max-w-6xl space-y-10 px-0 md:px-10 */}
							<div className="max-w-6xl space-y-10 ">
								{/* old style */}
								{/* text-center text-4xl font-semibold */}
								<h4 className="text-center text-xl sm:text-2xl">
									<span className="underline decoration-[#F7AB0A]/50">
										Case Study {i + 1} of {projects.length}:
									</span>{" "}
									{project?.title}
								</h4>
								{/* old style */}
								{/* flex items-center justify-center space-x-2 */}
								<div className="flex items-center justify-center space-x-2">
									{project?.technologies.map((technology) => (
										<Image
											className="h-10 w-10"
											key={technology._id}
											width={40}
											height={40}
											src={urlFor(technology.image).url()}
											alt={technology.title}
										/>
									))}
								</div>
								{/* old style */}
								{/* text-center text-lg md:text-left */}
								<p className="text-base">{project?.summary}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</motion.div>
	);
}

export default Projects;
