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
		<div className=' '>
			<div className='grid gap-8'>
				<Hero />
				<div className='grid gap-16'>
					<TrendingMovies dataForWeek={weekTrending} dataForDay={dayTrending} />
					<UpcomingMovies data={upcoming} />
					<TopRatedMovies data={topRated} />
				</div>
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
