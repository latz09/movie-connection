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
		<div className=' h-full grid gap-1 sm:flex flex-col  justify-around mt-4 lg:mt-8 '>
			
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
			<div className=''>
				<SearchBar setSearchValue={setSearchValue} ref={inputRef} />
			</div>
		</div>
	);
};

export default HeadingSearch;

