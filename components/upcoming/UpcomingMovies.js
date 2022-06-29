import MovieCategoryDisplay from '../Displays/MovieOverviews/MovieCategoryDisplay';
import SectionHeading from '../utils/SectionHeading';

const UpcomingMovies = ({ data }) => {
	return (
		<>
			<SectionHeading title={'Upcoming movies'} />
			<MovieCategoryDisplay data={data} id={'upcoming'} />
		</>
	);
};

export default UpcomingMovies;
