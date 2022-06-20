import MovieCategoryDisplay from '../Displays/MovieCategoryDisplay';
import SectionHeading from '../utils/SectionHeading';

const TopRatedMovies = ({ data }) => {
	console.log(data);
	return (
		<>
			<div>
				<SectionHeading title={'All Time Top Rated'} />{' '}
			</div>
			<div>
				<MovieCategoryDisplay data={data} />
			</div>
		</>
	);
};

export default TopRatedMovies;
