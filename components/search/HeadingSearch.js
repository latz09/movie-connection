import { useState, useEffect, useRef } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar'; 
import { server } from '../../config';

const HeadingSearch = () => {
	const [searchValue, setSearchValue] = useState('');
	const [results, setResults] = useState([]);
	const inputRef = useRef(null);

	const getMovieResults = async (value) => {
		const url = `${server}/search/movie?api_key=a2f0798c92ead2ff4fa893d6a9430867&language=en-US&query=${value}`;
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
			: '';
	}, [searchValue]);

	return (
		<div className='pt-12'>
			<div>
				<SearchBar setSearchValue={setSearchValue} ref={inputRef} />
			</div>
			{results && (
				<MovieList
					movies={results}
					clearResults={clearResults}
					reff={inputRef}
				/>
			)}
		</div>
	);
};

export default HeadingSearch;
