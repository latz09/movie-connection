import { formatUrl } from "./formatUrl";
import { server } from "../../config";

export async function getActorBiography(actorId) {
	const biographyResponse = await fetch(formatUrl(actorId, '', server));
	const bioData = await biographyResponse.json();

	let biography;

	return (biography = {
		biography: bioData.biography,
	});
}
export async function getActorRelatedImages(actorId) {
	const imageResponse = await fetch(formatUrl(actorId, 'images', server));
	const images = await imageResponse.json();

	return images;
}
export async function getActorsMovies(actorId) {
	const moviesResponse = await fetch(
		formatUrl(actorId, 'movie_credits', server)
	);

	const credits = await moviesResponse.json();
	const movies = credits.cast;

	return movies;
}
