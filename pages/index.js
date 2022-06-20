import { trendingServer, server } from '../config';

import TrendingMovies from '../components/trendingMovies/TrendingMovies';
import TopRatedMovies from '../components/top-rated/TopRatedMovies';

export default function Home({ trendingData, topRatedData }) {
	console.log(topRatedData);
	return (
		<div className='min-h-screen bg-[#0d0d0d] px-8 max-w-6xl mx-auto'>
			<div className='pb-12'>
				{' '}
				<TrendingMovies data={trendingData} />
			</div>
			<div>
				<TopRatedMovies data={topRatedData}/>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const trendingResponse = await fetch(
		`${trendingServer}${process.env.customKey}`
	);

	const topRatedResponse = await fetch(
		`${server}/movie/top_rated?api_key=${process.env.customKey}`
	);

	const trendingData = await trendingResponse.json();
	const topRatedData = await topRatedResponse.json();

	return {
		props: {
			trendingData: trendingData.results,
			topRatedData: topRatedData.results,
		},
	};
}
