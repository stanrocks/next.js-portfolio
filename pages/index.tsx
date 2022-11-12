import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		// temporarily(?) disabled properties from style below:
		// overflow-y-scroll overflow-auto
		// snap-y snap-mandatory
		// !! there is an issue with snap-y and snap-mandatory, possibly due to huge circles/animation. It also creates unwanted vertical space above and scrolling
		// possible fixes:
		// 1. change circle sizes (gotta do it anyway to adapt for mobile devices)
		// 2. count header height (now it's fixed as 50+20+20px which is also questionable)
		// and add it to hero component's top padding I guess
		<div className="z-0 h-screen overflow-x-hidden bg-[rgb(36,36,36)] text-white">
			<Head>
				<title>Stan Rocks Portfolio</title>
			</Head>

			<Header />

			{/* Hero */}
			<section
				id="hero"
				className="snap-start">
				<Hero />
			</section>

			{/* About */}
			<section
				id="about"
				className="snap-center">
				<About />
			</section>

			{/* Experience */}

			{/* Skills */}

			{/* Projects */}

			{/* Contact Me */}
		</div>
	);
}
