import TrendingMovies from '../components/trendingMovies/TrendingMovies';
import TopRatedMovies from '../components/top-rated/TopRatedMovies';
import HeadingSearch from '../components/search/HeadingSearch';
import Hero from '../components/Hero/Hero';
import { getHomePageData } from '../utils/fetchMovies/getHomePageData';

export default function Home({ weekTrending, dayTrending, topRated }) {
	return (
		<div className='min-h-screen bg-[#0d0d0d] max-w-6xl mx-auto'>
			<Hero />

			<div className='px-6'>
				<HeadingSearch />
			</div>
			<div className='pb-12'>
				{' '}
				<TrendingMovies dataForWeek={weekTrending} dataForDay={dayTrending} />
			</div>
			<div>
				<TopRatedMovies data={topRated} />
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const data = await getHomePageData();

	return {
		props: {
			weekTrending: data.trendingForDay.results,
			dayTrending: data.trendingForWeek.results,
			topRated: data.topRated.results,
		},
	};
}
