import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white">
			<Head>
				<title>Stan Rocks Portfolio</title>
			</Head>

			<Header />

			{/* Hero */}
			<section
				id="hero"
				className="snap-center">
				<Hero />
			</section>
			{/* About */}

			{/* Experience */}

			{/* Skills */}

			{/* Projects */}

			{/* Contact Me */}
		</div>
	);
}
