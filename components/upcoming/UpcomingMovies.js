import MovieCategoryDisplay from '../Displays/MovieOverviews/MovieCategoryDisplay';
import SectionHeading from '../utils/SectionHeading';

const UpcomingMovies = ({ data }) => {
	return (
		<div className="grid gap-16">
			<SectionHeading title={'Upcoming movies'} />
			<MovieCategoryDisplay data={data} id={'upcoming'} />
		</div>
	);
};

export default UpcomingMovies;
