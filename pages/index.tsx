import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
// import styles from "../styles/Home.module.css";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
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
	// TODO: Implement smooth scrolling with (probably?) react-scroll (https://github.com/fisshy/react-scroll)
	// manual: https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react
	//
	return (
		// temporarily(?) disabled properties from style below:
		// ver 1: overflow-y-scroll overflow-auto
		// ver 2: overflow-x-hidden
		// snap-y snap-mandatory overflow-scroll
		// !! there is an issue with snap-y and snap-mandatory, possibly due to huge circles/animation. It also creates unwanted vertical space above and scrolling
		// possible fixes:
		// 1. change circle sizes (gotta do it anyway to adapt for mobile devices)
		// 2. count header height (now it's fixed as 50+20+20px which is also questionable)
		// and add it to hero component's top padding I guess
		<div className="z-0 h-screen overflow-y-scroll bg-[rgb(36,36,36)] text-white scrollbar overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
			<Head>
				<title>Stan Rocks Portfolio</title>
			</Head>

			<Header />

			<section
				id="hero"
				className="snap-start">
				<Hero />
			</section>

			<section
				id="about"
				className="snap-center">
				<About />
			</section>

			<section
				id="experience"
				className="snap-center">
				<WorkExperience />
			</section>

			<section
				id="skills"
				className="snap-start">
				<Skills />
			</section>

			<section
				id="projects"
				className="snap-start">
				<Projects />
			</section>

			<section
				id="contact"
				className="snap-start">
				<ContactMe />
			</section>

			<Link href="#hero">
				<footer className="sticky bottom-5 w-full cursor-pointer">
					<div className="flex items-center justify-center">
						{/* TODO: implement next img  */}
						<img
							className="h-10 w-10 cursor-pointer rounded-full grayscale filter hover:grayscale-0"
							src="https://avatars.githubusercontent.com/u/25880632?v=4"
							alt=""
						/>
					</div>
				</footer>
			</Link>
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
		// - At most every10 seconds
		revalidate: 10,
	};
};
