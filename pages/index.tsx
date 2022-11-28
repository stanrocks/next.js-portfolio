import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
// import styles from "../styles/Home.module.css";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { classNames } from "../utils/classNames";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocial } from "../utils/fetchSocials";

type Props = {
	pageInfo: PageInfo;
	experiences: Experience[];
	skills: Skill[];
	projects: Project[];
	socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.scrollY > 500) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		// temporarily(?) disabled properties from style below:
		// snap-y snap-mandatory overflow-scroll
		// h-screen - with that proper scrollbar works. but layout doesn't
		// TODO: fix custom scrollbar
		<div className="relative z-0 overflow-y-scroll break-words bg-[rgb(36,36,36)] text-white overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 sm:scrollbar-thin">
			<Head>
				<title>{pageInfo?.name} - Portfolio</title>
			</Head>

			<Header
				socials={socials}
				isVisible={isVisible}
			/>

			<section
				id="hero"
				className="snap-start">
				<Hero pageInfo={pageInfo} />
			</section>

			<section
				id="about"
				className="snap-start">
				<About pageInfo={pageInfo} />
			</section>

			<section
				id="experience"
				className="snap-center">
				<WorkExperience experiences={experiences} />
			</section>

			<section
				id="skills"
				className="snap-start">
				<Skills skills={skills} />
			</section>

			<section
				id="projects"
				className="snap-start">
				<Projects projects={projects} />
			</section>

			<section
				id="contact"
				className="snap-start">
				<ContactMe />
			</section>

			<footer className="fixed bottom-0 w-screen select-none">
				<div className="mx-auto flex max-w-6xl justify-end p-5">
					<Link
						className={classNames(
							isVisible ? "opacity-100 delay-[2000ms]" : "opacity-0",
							"cursor-pointer transition-opacity duration-1000"
						)}
						href="#hero">
						<Image
							className="h-10 w-10 rounded-full grayscale filter hover:grayscale-0"
							src="https://avatars.githubusercontent.com/u/25880632?v=4"
							width={40}
							height={40}
							alt="Back to top"
						/>
					</Link>
				</div>
			</footer>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
	const pageInfo: PageInfo = await fetchPageInfo();
	const experiences: Experience[] = await fetchExperiences();
	const skills: Skill[] = await fetchSkills();
	const projects: Project[] = await fetchProjects();
	const socials: Social[] = await fetchSocial();

	return {
		props: {
			pageInfo,
			experiences,
			skills,
			projects,
			socials,
		},
		// Next.js will attempt to re-generate the page
		// - When a request comes in
		// - At most every 10 seconds
		revalidate: 10,
	};
};
