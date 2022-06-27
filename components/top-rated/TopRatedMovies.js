import MovieCategoryDisplay from '../Displays/MovieOverviews/MovieCategoryDisplay';
import SectionHeading from '../utils/SectionHeading';

const TopRatedMovies = ({ data }) => {
	return (
		<>
			<div className="pb-3">
				<SectionHeading title={'Through the years top rated'} />{' '}
			</div>
			<div>
				<MovieCategoryDisplay data={data} id={'top-rated'} />
			</div>
		</> 
	);
};

export default TopRatedMovies;
 