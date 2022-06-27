import { formatUrl } from './formatUrl';
import { server } from '../../config';

export async function getActorBiography(actorId) {
	const biographyResponse = await fetch(formatUrl(actorId, '', server));
	const bioData = await biographyResponse.json();

	let biography;

	return (biography = {
		name: bioData.name,
		bio: bioData.biography,
		image: bioData.profile_path,
		age: bioData.birthday,
		birthPlace: bioData.place_of_birth,
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

	const moviesByPopularity = movies.sort((a, b) => b.popularity - a.popularity);

	return moviesByPopularity;
}
