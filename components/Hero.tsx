import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity"; // https://www.sanity.io/docs/image-url

type Props = {
	pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
	const [text, count] = useTypewriter({
		words: [
			`Hi, this is ${pageInfo?.name}`,
			`Guy-who-loves-coffee.tsx`,
			`<ButLovesToCodeMore />`,
		],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div className="flex h-screen select-none flex-col justify-center">
			<BackgroundCircles />

			{/* Hero image */}
			<div className="absolute inset-0 flex h-screen">
				<Link
					className="m-auto hover:brightness-110"
					href="#about">
					<Image
						className="z-20 h-32 w-32 rounded-full object-cover"
						src={urlFor(pageInfo?.heroImage).url()}
						alt="Stan Rocks photo"
						width={128}
						height={128}
						priority
						// blurDataURL="data:..." automatically provided
						// placeholder="blur" // Optional blur-up while loading
					/>
				</Link>
			</div>

			{/* Text block under image */}
			<div className="relative z-20 m-auto flex translate-y-[160px] flex-col text-center">
				<h2 className="-mr-[15px] py-4 px-8 text-sm uppercase tracking-[15px] text-gray-500 sm:text-base">
					{pageInfo?.role}
				</h2>
				<h1 className="text-xl sm:text-3xl lg:text-5xl">
					{text}
					<Cursor cursorColor="#F7AB0A" />
				</h1>

				<nav className="mx-auto max-w-[24rem] pt-5 sm:max-w-[32rem]">
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>
					<Link href="#experience">
						<button className="heroButton">Experience</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
					<Link href="#contact">
						<button className="heroButton">Contact</button>
					</Link>
				</nav>
			</div>
		</div>
	);
}
