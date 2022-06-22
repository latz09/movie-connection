import {
	server,
	imageServer,
	trendingServer_Week,
	trendingServer_Day,
	topRatedServer,
} from '../config/index';

// function to return trendingData_week, trendingData_day and topRatedData

export const getHomePageData = async () => {
	const homePageData = [];

	const weekTrendingResponse = await fetch(trendingServer_Week);

	const dayTrendingResponse = await fetch(trendingServer_Day);

	const topRatedResponse = await fetch(topRatedServer);

	const weekTrendingData = await weekTrendingResponse.json();
	const dayTrendingData = await dayTrendingResponse.json();
	const topRatedData = await topRatedResponse.json();

	homePageData.push({
		trendingForWeek: weekTrendingData,
		trendingForDay: dayTrendingData,
		topRated: topRatedData,
	});

	return homePageData[0];
};

//function to return details and premeireReleaseData and trailer

//function to return recommendations
