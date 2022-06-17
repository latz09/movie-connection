import MovieDisplay from '../../components/Displays/MovieDisplay';
import { server } from '../../config';

const moviePage = ({ data }) => {
	return (
		<div className='pt-12 bg-gray-800 h-screen'>
			<MovieDisplay data={data} />
		</div>
	);
};

export async function getStaticProps({ params }) {
	const details_URL = `${server}/movie/${params.movieId}?api_key=${process.env.API_KEY}&language=en-US`;
	const releaseInfo_URL = `${server}/movie/${params.movieId}/release_dates?api_key=${process.env.API_KEY}`;

	const detailsResponse = await fetch(details_URL);
	const detailsData = await detailsResponse.json();

	const releaseInfoResponse = await fetch(releaseInfo_URL);
	const releaseData = await releaseInfoResponse.json();

	const premiereReleaseData = releaseData.results.filter(
		(x) => x.iso_3166_1 === 'US'
	)[0].release_dates[0];
	

	return {
		props: {
			data: {
				title: detailsData.title,
				overview: detailsData.overview,
				genres: detailsData.genres,
				runtime: detailsData.runtime,
				poster: detailsData.poster_path,
				rating: premiereReleaseData.certification,
				releaseDate:  (premiereReleaseData.release_date)
				
			},
		},
		revalidate: 10,
	};
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}

export default moviePage;

