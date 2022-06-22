import MovieDisplay from '../../components/Displays/MovieDisplay';
import MovieReccomendations from '../../components/recommendations/MovieRecommendations';
import { server } from '../../config';

const moviePage = ({ data, movieId, recommendations, trailer }) => {
	return (
		<div className=' w-3/4 mx-auto min-h-screen'>
			<div className='pt-12'>
				<MovieDisplay data={data} trailer={trailer} />
			</div>
			<div>
				{recommendations && <MovieReccomendations data={recommendations} />}
			</div>
			<div>
				<h1>testing</h1>
			</div>
		</div>
	);
};

export async function getStaticProps({ params, res }) {
	//create a function that returns reccommendationData, releaseData, detailsData, and probably the youtube one
	const details_URL = `${server}/movie/${params.movieId}?api_key=${process.env.customKey}&language=en-US`;
	const releaseInfo_URL = `${server}/movie/${params.movieId}/release_dates?api_key=${process.env.API_KEY}`;
	const recommendation_URL = `${server}/movie/${params.movieId}/recommendations?api_key=${process.env.customKey}&language=en-US&page=1`;
	const trailer_URL = `${server}/movie/${params.movieId}/videos?api_key=${process.env.customKey}`;

	const detailsResponse = await fetch(details_URL);
	const detailsData = await detailsResponse.json();

	const releaseInfoResponse = await fetch(releaseInfo_URL);
	const releaseData = await releaseInfoResponse.json();

	const recommendationResponse = await fetch(recommendation_URL);
	const recommendationData = await recommendationResponse.json();

	const trailerResponse = await fetch(trailer_URL);
	const trailerData = await trailerResponse.json();

	const premiereReleaseData = releaseData.results.filter(
		(x) => x.iso_3166_1 === 'US'
	)[0].release_dates[0];

	const trailer = trailerData.results.filter(
		(trailer) => trailer.official === true && trailer.site === 'YouTube'
	);

	// res.setHeader('location', `/movies/${params.movieId}` )

	return {
		props: {
			data: {
				title: detailsData.title,
				overview: detailsData.overview,
				genres: detailsData.genres,
				runtime: detailsData.runtime,
				poster: detailsData.poster_path,
				rating: premiereReleaseData.certification,

				// recommendations: recommendationData.results,
				// movieId: detailsData.id
				// releaseDate:  (premiereReleaseData.release_date)
			},
			movieId: detailsData.id,
			recommendations: recommendationData.results,
			trailer: trailer,
		},
	};
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}

export default moviePage;
