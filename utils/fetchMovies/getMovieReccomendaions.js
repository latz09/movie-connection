import { server } from '../../config/index';
import { formatUrl } from './formatUrl';

export const getMovieRecommendations = async (movieId) => {
	const recommendationResponse = await fetch(
		formatUrl(movieId, 'recommendations', server)
	);
	const recommendations = recommendationResponse.json();

	return recommendations;
};
