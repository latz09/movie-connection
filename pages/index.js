import { useState, useEffect, useRef } from 'react';
import MainTitle from '../components/Hero';
import MovieList from '../components/userSearch/MovieList';
import SearchBar from '../components/userSearch/SearchBar';
import { server } from '../config'; 

export default function Home() {
	const [searchValue, setSearchValue] = useState('');
	const [results, setResults] = useState([]);
	const inputRef = useRef(null)

	const getMovieResults = async (value) => {
		const url = `${server}/search/movie?api_key=a2f0798c92ead2ff4fa893d6a9430867&language=en-US&query=${value}`;
		const res = await fetch(url);
		const data = await res.json();

		setResults(data.results);
	};

	useEffect(() => {
		inputRef.current.value.length > 2 ? getMovieResults(inputRef.current.value) : '';
	}, [searchValue]);

	return (
		<div className='h-screen px-12 bg-black'>
			<div>
				<MainTitle />{' '}
			</div>
			<div>
				<SearchBar  setSearchValue={setSearchValue} ref={inputRef} />
			</div>
			{results ? <MovieList movies={results} /> : 'test'}
		</div>
	);
}