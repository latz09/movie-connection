import MovieCategoryDisplay from '../Displays/MovieCategoryDisplay';
import SectionHeading from '../utils/SectionHeading';

const MovieReccomendations = ({ data }) => {
	console.log(data);

	return (
		<div className='pb-20'>
			<div className="p-6">
				<SectionHeading title={'You may also enjoy...'} />
			</div>
			<div>
				<MovieCategoryDisplay data={data} />
			</div>
		</div>
	);
};

export default MovieReccomendations;
