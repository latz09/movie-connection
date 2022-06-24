import SectionHeading from '../utils/SectionHeading';
import MovieCategoryDisplay from '../Displays/MovieOverviews/MovieCategoryDisplay';
import { useState } from 'react';
import TrendingFilter from './TrendingFilter';

const TrendingMovies = ({ dataForWeek, dataForDay }) => {
	const [trenderFilter, setTrenderFilter] = useState(dataForWeek);
	const [toggle, setToggle] = useState('week');

	const setToDay = () => {
		setTrenderFilter(dataForDay);
		setToggle('day');
	};

	const setToWeek = () => {
		setTrenderFilter(dataForWeek);
		setToggle('week');
	};

	return (
		<div>
			<SectionHeading
				title={`${toggle === 'week' ? 'Trending This Week' : 'Trending Today'}`}
			/>
			<TrendingFilter setDay={setToDay} setWeek={setToWeek} toggle={toggle} />
			<MovieCategoryDisplay data={trenderFilter} />
		</div>
	);
};

export default TrendingMovies;
