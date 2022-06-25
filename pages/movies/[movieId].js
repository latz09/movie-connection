import { getMovieRecommendations } from '../../utils/fetchMovies/getMovieReccomendaions';
import { getMovieDetails } from '../../utils/fetchMovies/getMovieDetails';

import MovieDisplay from '../../components/Displays/MovieOverviews/MovieDisplay';
import MovieReccomendations from '../../components/recommendations/MovieRecommendations';




const moviePage = ({ movieData, recommendations }) => {
	return (
		<div className='mx-auto min-h-screen'>
			<div className=''>
				<MovieDisplay data={movieData} />
			</div>
			<div className='mx-auto max-w-4xl md:px-2'>
				{recommendations && (
					<MovieReccomendations data={recommendations.results} />
				)}
			</div>
		</div>
	);
};

export async function getStaticProps({ params }) {
	const movieData = await getMovieDetails(params.movieId);
	const recommendations = await getMovieRecommendations(params.movieId); 

	return {
		props: { movieData, recommendations },
	};
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}

export default moviePage;
