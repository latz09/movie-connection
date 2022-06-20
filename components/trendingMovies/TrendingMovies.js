import SectionHeading from '../utils/SectionHeading';
import MovieCategoryDisplay from '../Displays/MovieCategoryDisplay';

const TrendingMovies = ({ data }) => {
	return (
		<div>
			<SectionHeading title={'Trending This Week'} />
			<MovieCategoryDisplay data={data} />
		</div>
	);
};

export default TrendingMovies;
