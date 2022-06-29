import TrendingMovies from '../components/trendingMovies/TrendingMovies';
import TopRatedMovies from '../components/top-rated/TopRatedMovies';
import HeadingSearch from '../components/search/HeadingSearch';
import Hero from '../components/Hero/Hero';
import { getHomePageData } from '../utils/fetchMovies/getHomePageData';
import UpcomingMovies from '../components/upcoming/UpcomingMovies';

export default function Home({
	weekTrending,
	dayTrending,
	topRated,
	upcoming,
}) {
	return (
		<div className='min-h-screen bg-[#0d0d0d] max-w-6xl mx-auto '>
			<Hero />

			<div className='grid gap-4 space-y-4 mt-4'>
				<HeadingSearch />{' '}
				<TrendingMovies dataForWeek={weekTrending} dataForDay={dayTrending} />
				<UpcomingMovies data={upcoming} />
				<TopRatedMovies data={topRated} />
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	let data;

	try {
		data = await getHomePageData();
	} catch (error) {
		console.log(error);
		data = [];
	}

	return {
		props: {
			weekTrending: data.trendingForDay.results,
			dayTrending: data.trendingForWeek.results,
			topRated: data.topRated.results,
			upcoming: data.upcoming.results,
		},
	};
}
