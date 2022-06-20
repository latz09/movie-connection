import { trendingServer } from '../config';
import MovieCategoryDisplay from '../components/Displays/MovieCategoryDisplay';
import TrendingMovies from '../components/trendingMovies/TrendingMovies';

export default function Home({ trendingData }) {
	return (
		<div className='min-h-screen bg-[#0d0d0d] px-8 max-w-6xl mx-auto'>
			<TrendingMovies data={trendingData} />
		</div>
		
	);
}

export async function getServerSideProps() {
	const trendingResponse = await fetch(
		`${trendingServer}${process.env.customKey}`
	);
	const data = await trendingResponse.json();

	return {
		props: {
			trendingData: data.results,
		},
	};
}
 