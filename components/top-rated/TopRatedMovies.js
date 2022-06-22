import MovieCategoryDisplay from '../Displays/MovieCategoryDisplay';
import SectionHeading from '../utils/SectionHeading';

const TopRatedMovies = ({ data }) => {
	return (
		<>
			<div className="pb-3">
				<SectionHeading title={'Through the years top rated'} />{' '}
			</div>
			<div>
				<MovieCategoryDisplay data={data} />
			</div>
		</> 
	);
};

export default TopRatedMovies;
