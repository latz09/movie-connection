import {
	getActorBiography,
	getActorRelatedImages,
	getActorsMovies,
} from './getActorDetails';

export const getActorData = async (actorId) => {
	let data;
	const biography = await getActorBiography(actorId);
	const images = await getActorRelatedImages(actorId);
	const movies = await getActorsMovies(actorId);
	data = {
		biography,
		images,
		movies,
	};

	return data;
};
