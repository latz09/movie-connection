import MovieDisplay from '../../components/Displays/MovieDisplay';
import MovieReccomendations from '../../components/recommendations/MovieRecommendations';


import {
	getMovieDetails,
	getMovieRecommendations,
} from '../../utils/getResults';

const moviePage = ({ movieData, recommendations }) => {
	return (
		<div className=' w-3/4 mx-auto min-h-screen'>
			<div className='pt-12'>
				<MovieDisplay data={movieData} />
			</div>
			<div>
				{recommendations && <MovieReccomendations data={recommendations} />} 
				
			</div>
			<div>
				<h1 className="text-center">loading</h1>
			</div>
		</div>
	);
};

export async function getStaticProps({ params, res }) {
	const movieData = await getMovieDetails(params.movieId);
	const recommendations = await getMovieRecommendations(params.movieId);

	return {
		props: { movieData, recommendations: recommendations.results },
	};
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}

export default moviePage;
