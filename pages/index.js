import { useState, useEffect } from 'react';
import MainTitle from '../components/Hero';
import MovieList from '../components/userSearch/MovieList';
import SearchBar from '../components/userSearch/SearchBar';
import { server } from '../config';
import { getResults } from '../utils/getResults';

export default function Home() {
	const [searchValue, setSearchValue] = useState('');
	const [results, setResults] = useState([]);

	const inputChangeHandler = (event) => {
		setSearchValue(event.target.value);
	};
	const getMovieResults = async (title) => {
		const url = `${server}/search/movie?api_key=a2f0798c92ead2ff4fa893d6a9430867&language=en-US&query=${title}`;
		const res = await fetch(url);
		const data = await res.json();

		setResults(data.results);
	};
	
	useEffect(() => {
		getMovieResults('toy');
	}, []);

	return (
		<div className='h-screen'>
			<div>
				<MainTitle />{' '}
			</div>
			<div>
				<SearchBar
					searchValue={searchValue}
					inputChangeHandler={inputChangeHandler}
				/>
			</div>
			<div>
				<MovieList movies={results.slice(0, 7)} />
			</div>
		</div>
	);
}

// https://api.themoviedb.org/3
//this set up will be good for details page
//just dont make the url a search
// export async function getServerSideProps() {
// 	const res = await fetch(
// 		`${server}/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=Avengers&page=1`
// 	);
// 	const data = await res.json();
// 	const movies = data.results;

// 	return {
// 		props: { movies },
// 	};
// }

// https://api.themoviedb.org/3/movie/550?api_key=a2f0798c92ead2ff4fa893d6a9430867
