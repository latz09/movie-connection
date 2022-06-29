import { server } from '../../config/index';
import { formatUrl } from './formatUrl';



export const getMovieDetails = async (movieId) => {
	let movieDetails;
	let trailerId;
	
	const detailsResponse = await fetch(formatUrl(movieId, '', server));
	const trailerResponse = await fetch(formatUrl(movieId, 'videos', server));

	const detailsData = await detailsResponse.json();
	const trailerData = await trailerResponse.json();

	
	if (trailerData.results.length < 1) {
		trailerId = null;
	} else {
		trailerId = trailerData.results.filter(
			(trailer) => trailer.site === 'YouTube'
		)[0].key;
	}

	

	movieDetails = {
		title: detailsData.title,
		overview: detailsData.overview,
		genres: detailsData.genres,
		runtime: detailsData.runtime,
		poster: detailsData.poster_path,
		backdrop: detailsData.backdrop_path,
		trailerId: trailerId,
		id: detailsData.id,
	};

	return movieDetails;
};
