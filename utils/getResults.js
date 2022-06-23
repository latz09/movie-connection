import {
	server,
	trendingServer_Week,
	trendingServer_Day,
	topRatedServer,
} from '../config/index';

const dbKey = process.env.customKey;

//homePage data retrieval: -trending day&week- -top rated -
export const getHomePageData = async () => {
	let homePageData;

	const weekTrendingResponse = await fetch(trendingServer_Week);

	const dayTrendingResponse = await fetch(trendingServer_Day);

	const topRatedResponse = await fetch(topRatedServer);

	const weekTrendingData = await weekTrendingResponse.json();
	const dayTrendingData = await dayTrendingResponse.json();
	const topRatedData = await topRatedResponse.json();

	homePageData = {
		trendingForWeek: weekTrendingData,
		trendingForDay: dayTrendingData,
		topRated: topRatedData,
	};

	return homePageData;
};

export const getMovieDetails = async (movieId) => {
	let movieDetails;

	const details_URL = `${server}/movie/${movieId}?api_key=${dbKey}&language=en-US`;	

	const detailsResponse = await fetch(details_URL);

	const detailsData = await detailsResponse.json();

	movieDetails = {
		title: detailsData.title,
		overview: detailsData.overview,
		genres: detailsData.genres,
		runtime: detailsData.runtime,
		poster: detailsData.poster_path,
		backdrop: detailsData.backdrop_path,
	};

	return movieDetails;
};

export const getMovieRecommendations = async (movieId) => {
	const recommendation_URL = `${server}/movie/${movieId}/recommendations?api_key=${dbKey}&language=en-US&page=1`;

	const recommendationResponse = await fetch(recommendation_URL);
	const recommendations = recommendationResponse.json();

	return recommendations;
};
