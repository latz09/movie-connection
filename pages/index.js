import { trendingServer_Week, server, trendingServer_Day } from '../config';

import TrendingMovies from '../components/trendingMovies/TrendingMovies';
import TopRatedMovies from '../components/top-rated/TopRatedMovies';
import HeadingSearch from '../components/search/HeadingSearch';
import Hero from '../components/Hero/Hero';

export default function Home({ trendingData_Week, trendingData_Day, topRatedData }) {
	return (
		<div className='min-h-screen bg-[#0d0d0d] max-w-6xl mx-auto'>
			<div>
				<Hero />
			</div>
			<div className='px-6'>
				<HeadingSearch />
			</div>
			<div className='pb-12'>
				{' '}
				<TrendingMovies dataForWeek={trendingData_Week} dataForDay={trendingData_Day}/>
			</div>
			<div>
				<TopRatedMovies data={topRatedData} />
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const weekTrendingResponse = await fetch(trendingServer_Week);

	const dayTrendingResponse = await fetch(trendingServer_Day);

	const topRatedResponse = await fetch(
		`${server}/movie/top_rated?api_key=${process.env.customKey}`
	);

	const weekTrendingData = await weekTrendingResponse.json();
	const dayTrendingData = await dayTrendingResponse.json();
	const topRatedData = await topRatedResponse.json();

	return {
		props: {
			trendingData_Week: weekTrendingData.results,
			trendingData_Day: dayTrendingData.results,
			topRatedData: topRatedData.results,
		},
	};
}
