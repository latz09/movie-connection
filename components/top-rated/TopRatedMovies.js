import MovieCategoryDisplay from '../Displays/MovieOverviews/MovieCategoryDisplay';
import SectionHeading from '../utils/SectionHeading';

const TopRatedMovies = ({ data }) => {
	return (
		<div className="gap-16 grid">
			<div className="">
				<SectionHeading title={'Through the years top rated'} />{' '}
			</div>
			<div>
				<MovieCategoryDisplay data={data} id={'top-rated'} />
			</div>
		</div> 
	);
};

export default TopRatedMovies;
 