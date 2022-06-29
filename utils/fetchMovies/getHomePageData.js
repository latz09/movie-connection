import {
	trendingServer_Week,
	trendingServer_Day,
	topRatedServer,
	upcomingServer,
} from '../../config/index';

export const getHomePageData = async () => {
	let homePageData;

	const weekTrendingResponse = await fetch(trendingServer_Week);
	const dayTrendingResponse = await fetch(trendingServer_Day);
	const topRatedResponse = await fetch(topRatedServer);
	const upcomingResponse = await fetch(upcomingServer);

	const weekTrendingData = await weekTrendingResponse.json();
	const dayTrendingData = await dayTrendingResponse.json();
	const topRatedData = await topRatedResponse.json();
	const upcomingData = await upcomingResponse.json();

	homePageData = {
		trendingForWeek: weekTrendingData,
		trendingForDay: dayTrendingData,
		topRated: topRatedData,
		upcoming: upcomingData,
	};

	return homePageData;
};
