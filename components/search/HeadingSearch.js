import { useState, useEffect, useRef } from 'react';
import MovieList from './MovieList';
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
			: '';
	}, [searchValue]);

	return (
		<div className='pt-12 pb-8'>
			<div className="pb-6">
				<SearchBar setSearchValue={setSearchValue} ref={inputRef} />
			</div>
			{results && <MovieCategoryDisplay data={results} id={'search'} />}
		</div>
	);
};

export default HeadingSearch;
