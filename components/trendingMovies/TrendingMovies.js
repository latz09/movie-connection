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
		<div className="grid gap-8">
			<div className="gap-2 grid">
			<SectionHeading
				title={`${toggle === 'week' ? 'Trending This Week' : 'Trending Today'}`}
			/>
			<TrendingFilter setDay={setToDay} setWeek={setToWeek} toggle={toggle} /></div>
			<MovieCategoryDisplay data={trenderFilter} id={'trending'} />
		</div>
	);
};

export default TrendingMovies;
