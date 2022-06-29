import { server } from '../../config/index';
import { formatUrl } from './formatUrl';



export const getMovieCredits = async (movieId) => {
	const creditsResponse = await fetch(formatUrl(movieId, 'credits', server));
	const credits = creditsResponse.json();

	return credits;
};
 