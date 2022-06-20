import MovieCategoryDisplay from '../Displays/MovieCategoryDisplay';
import SectionHeading from '../utils/SectionHeading';
import {useState} from 'react'

const MovieReccomendations = ({ data }) => {
	const [recommendations, setRecommendations] = useState(data);
	

	return (
		<div className='pb-20'>
			{data.legnth > 0 ? 'data' : 'no data'}
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
