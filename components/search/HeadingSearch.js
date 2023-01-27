import { useState, useEffect, useRef } from 'react';

import SearchBar from './SearchBar';
import { server } from '../../config';
import MovieCategoryDisplay from '../Displays/MovieOverviews/MovieCategoryDisplay';

const HeadingSearch = () => {
	const [searchValue, setSearchValue] = useState('');
	const [results, setResults] = useState([]);
	const inputRef = useRef(null);

	const getMovieResults = async (value) => {
		const url = `${server}/search/movie?api_key=${process.env.customKey}&language=en-US&query=${value}`;
		const res = await fetch(url);
		const data = await res.json();

		setResults(data.results);
	};

	const clearResults = () => {
		setResults([]);
		setSearchValue('');
		inputRef.current.value = '';
	};

	useEffect(() => {
		inputRef.current.value.length > 2
			? getMovieResults(inputRef.current.value)
			: setResults([]);
	}, [searchValue]);

	return (
		<div className=' h-full flex flex-col  justify-between mt-4 lg:mt-8 '>
			<div className=''>
				<SearchBar setSearchValue={setSearchValue} ref={inputRef} />
			</div>
			{searchValue.length > 2 && 
			<div className=''>
				{results && (
					<MovieCategoryDisplay
						data={results}
						id={'search'}
						clearResults={clearResults}
					/>
				)}
			</div>}
		</div>
	);
};

export default HeadingSearch;

