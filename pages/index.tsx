import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
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
	return (
		// temporarily(?) disabled properties from style below:
		// snap-y snap-mandatory overflow-scroll
		// h-screen - with that proper scrollbar works. but layout doesn't
		<div className="relative z-0 h-screen overflow-y-scroll break-words bg-[rgb(36,36,36)] text-white overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
			<Head>
				<title>{pageInfo?.name} - Portfolio</title>
			</Head>

			<Header socials={socials} />

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

			<Link href="#hero">
				<footer className="sticky bottom-5 w-full cursor-pointer">
					<div className="flex items-center justify-center">
						<Image
							className="h-10 w-10 cursor-pointer rounded-full grayscale filter hover:grayscale-0"
							src="https://avatars.githubusercontent.com/u/25880632?v=4"
							width={40}
							height={40}
							alt="Back to top"
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
		// - At most every 10 seconds
		revalidate: 10,
	};
};
