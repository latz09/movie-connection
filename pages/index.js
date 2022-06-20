import { trendingServer } from '../config';
import TrendingDisplay from '../components/trendingMovies/TrendingDisplay';

export default function Home({ data }) {
	console.log(data);
	return (
		<div className='min-h-screen bg-[#0d0d0d] px-8 max-w-6xl mx-auto'>
			<TrendingDisplay data={data} />
		</div>
	);
}

export async function getServerSideProps() {
	const trendingResponse = await fetch(
		`${trendingServer}${process.env.customKey}`
	);
	const trendingData = await trendingResponse.json();

	return {
		props: {
			data: trendingData.results,
		},
	};
}
