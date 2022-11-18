import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
// import profilePic from "../public/assets/me.jpg";
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
		// overflow-hidden
		<div className="flex h-screen flex-col items-center justify-center space-y-8 text-center">
			<BackgroundCircles />
			<Image
				className="relative mx-auto h-32 w-32 rounded-full object-cover"
				src={urlFor(pageInfo?.heroImage).url()}
				alt="Stan Rocks photo"
				width={128}
				height={128}
				// blurDataURL="data:..." automatically provided
				// placeholder="blur" // Optional blur-up while loading
			/>
			<div className="z-20">
				<h2 className="-mr-[15px] pb-2 text-sm uppercase tracking-[15px] text-gray-500">
					{pageInfo?.role}
				</h2>
				<h1 className="px-10 text-5xl font-semibold lg:text-6xl">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#F7AB0A" />
				</h1>

				<div className="pt-5 ">
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
				</div>
			</div>
		</div>
	);
}
