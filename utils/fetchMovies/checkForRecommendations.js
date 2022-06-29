import { getHomePageData } from "./getHomePageData";
import { getMovieRecommendations } from "./getMovieReccomendaions";

export const checkForRecommendations = async (params) => {
	let recommendations;
	recommendations = await getMovieRecommendations(params);
	if (recommendations.results.length === 0) {
		let x = await getHomePageData()
		recommendations = x.topRated;
	}
	return recommendations;
};
