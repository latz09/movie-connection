import MovieCategoryDisplay from '../Displays/MovieCategoryDisplay';
import SectionHeading from '../utils/SectionHeading';

const TopRatedMovies = ({ data }) => {
	console.log(data);
	return (
		<>
			<div>
				<SectionHeading title={'Through the years top rated'} />{' '}
			</div>
			<div>
				<MovieCategoryDisplay data={data} />
			</div>
		</>
	);
};

export default TopRatedMovies;
