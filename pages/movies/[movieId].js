import MovieDisplay from '../../components/Displays/MovieDisplay';
import MovieReccomendations from '../../components/recommendations/MovieRecommendations';
import { server } from '../../config';

const moviePage = ({ data, movieId, recommendations }) => {


	
	return ( 
		<div>
			<div className='pt-12'>
				<MovieDisplay data={data} />
			</div>
			<div>
				<MovieReccomendations data={recommendations}/>
			</div>
		</div>
	);
};
//https://api.themoviedb.org/3/movie/862/recommendations?api_key=a2f0798c92ead2ff4fa893d6a9430867&language=en-US&page=1
export async function getStaticProps({ params, res }) {
	const details_URL = `${server}/movie/${params.movieId}?api_key=${process.env.customKey}&language=en-US`;
	const releaseInfo_URL = `${server}/movie/${params.movieId}/release_dates?api_key=${process.env.API_KEY}`;
	const recommendation_URL = `${server}/movie/${params.movieId}/recommendations?api_key=${process.env.customKey}&language=en-US&page=1`

	const detailsResponse = await fetch(details_URL);
	const detailsData = await detailsResponse.json();

	const releaseInfoResponse = await fetch(releaseInfo_URL);
	const releaseData = await releaseInfoResponse.json();

	const recommendationResponse = await fetch(recommendation_URL)
	const recommendationData = await recommendationResponse.json()

	const premiereReleaseData = releaseData.results.filter(
		(x) => x.iso_3166_1 === 'US'
	)[0].release_dates[0];

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
				// movieId: detailsData.id
				// releaseDate:  (premiereReleaseData.release_date)
			},
			movieId: detailsData.id,
			recommendations: recommendationData.results
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
