import { getMovieRecommendations } from '../../utils/fetchMovies/getMovieReccomendaions';
import { getMovieDetails } from '../../utils/fetchMovies/getMovieDetails';
import MovieDisplay from '../../components/Displays/MovieOverviews/MovieDisplay';
import MovieReccomendations from '../../components/recommendations/MovieRecommendations';
import { getHomePageData } from '../../utils/fetchMovies/getHomePageData';

const moviePage = ({ movieData, recommendations }) => {
	return (
		<div className='mx-auto min-h-screen'>
			<div className=''> 
				<MovieDisplay data={movieData} />
			</div>
			<div className='mx-auto max-w-7xl md:px-2'>
				{recommendations && (
					<MovieReccomendations data={recommendations.results} />
				)}
			</div>
		</div>
	);
};

export async function getStaticProps({ params }) {
	//back up if no recommendations returned
	const checkForRecommendations = async (params) => {
		let recommendations;
		recommendations = await getMovieRecommendations(params);
		if (recommendations.results.length === 0) {
			let x = await getHomePageData();
			recommendations = x.topRated;
		}
		return recommendations;
	};
	const movieData = await getMovieDetails(params.movieId);
	const recommendations = await checkForRecommendations(params.movieId);

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
