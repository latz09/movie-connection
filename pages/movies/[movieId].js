import MovieDisplay from '../../components/Displays/MovieDisplay';
import MovieReccomendations from '../../components/recommendations/MovieRecommendations';

import {
	getMovieDetails, 
	getMovieRecommendations,
} from '../../utils/getResults';

const moviePage = ({ movieData, recommendations }) => {


	return (
		<div className='mx-auto min-h-screen'>
			<div className=''>
				<MovieDisplay data={movieData} />
			</div>
			<div className="mx-auto max-w-4xl p-3">
				{recommendations && <MovieReccomendations data={recommendations.results} />} 
				
			</div> 
		</div>
	);
};

export async function getStaticProps({ params, res }) {
	const movieData = await getMovieDetails(params.movieId);
	const recommendations = await getMovieRecommendations(params.movieId);

	return {
		props: { movieData, recommendations: recommendations },
	};
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}

export default moviePage;
