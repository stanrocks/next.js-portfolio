import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import styles from "../styles/Home.module.css";

export default function Home() {
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
		<div className="z-0 h-screen overflow-scroll overflow-x-hidden bg-[rgb(36,36,36)] text-white">
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
		</div>
	);
}
