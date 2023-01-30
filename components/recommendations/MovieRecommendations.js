import { useState, useEffect } from 'react';

import MovieCategoryDisplay from '../Displays/MovieOverviews/MovieCategoryDisplay';
import SectionHeading from '../utils/SectionHeading';

const MovieReccomendations = ({ data }) => {
	const [recommendations, setRecommendations] = useState([]);

	useEffect(() => {
		setRecommendations(data);
	}, [data]);

	return (
		<div className='grid gap-8'>
			<div className=''>
				<SectionHeading title={'You may also enjoy...'} />
			</div>
			<div>
				<MovieCategoryDisplay data={recommendations} id={'recommendations'} />
			</div>
		</div>
	);
};

export default MovieReccomendations;
