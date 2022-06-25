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
	const trailer_URL = `${server}/movie/${movieId}/videos?api_key=${dbKey}`;

	const detailsResponse = await fetch(details_URL);
	const trailerResponse = await fetch(trailer_URL);

	const detailsData = await detailsResponse.json();
	const trailerData = await trailerResponse.json();

	let trailerId
	if (trailerData.results.length < 1) {
		trailerId = null
	} else {
		trailerId = trailerData.results.filter(trailer => trailer.site === 'YouTube')[0].key
	}

	const x = trailerData.results.filter(trailer => trailer.site === 'YouTube')


	movieDetails = {
		title: detailsData.title,
		overview: detailsData.overview,
		genres: detailsData.genres,
		runtime: detailsData.runtime, 
		poster: detailsData.poster_path,
		backdrop: detailsData.backdrop_path,
		trailerId: trailerId,
		id: detailsData.id
	};



	return movieDetails;
};

export const getMovieRecommendations = async (movieId) => {
	const recommendation_URL = `${server}/movie/${movieId}/recommendations?api_key=${dbKey}&language=en-US&page=1`;

	const recommendationResponse = await fetch(recommendation_URL);
	const recommendations = recommendationResponse.json();

	return recommendations;
};

export const getMovieCredits = async (movieId) => {
	const credits_Url = `${server}/movie/${movieId}/credits?api_key=${dbKey}&language=en-US&page=1`

	const creditsResponse = await fetch(credits_Url)
	const credits = creditsResponse.json()
	

	return credits;
}
