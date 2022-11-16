import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"; //https://www.sanity.io/docs/image-url

export const config = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // "pv8y60vp"
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // "production"
	// https://www.sanity.io/docs/api-versioning
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // "2022-11-16"
	useCdn: typeof document !== "undefined", // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
};

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// const data = await client.fetch(groq`*[]`);

const builder = imageUrlBuilder(sanityClient); // https://www.sanity.io/docs/image-url
export function urlFor(source: any) {
	return builder.image(source);
}
