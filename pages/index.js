import MainTitle from '../components/MainTitle';
import MovieResults from '../components/userSearch/MovieResults';
import SearchBar from '../components/userSearch/SearchBar';

export default function Home() {
	const movieSearch = [
		{
			title: 'Toy Story',
			year: '1995',
			imbdID: 'tt0114709',
			poster:
				'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg',
		},
		{
			title: 'Toy Story 2',
			year: '1999',
			imbdId: 'tt0120363',
			poster:
				'https://m.media-amazon.com/images/M/MV5BMWM5ZDcxMTYtNTEyNS00MDRkLWI3YTItNThmMGExMWY4NDIwXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
		},
		{
			title: 'Toy Story 3',
			year: '2010',
			imbdId: 'tt0435761',
			poster:
				'https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SX300.jpg',
		},
		{
			title: 'Toy Story 2',
			year: '1999',
			imbdId: 'tt0120363',
			poster:
				'https://m.media-amazon.com/images/M/MV5BMWM5ZDcxMTYtNTEyNS00MDRkLWI3YTItNThmMGExMWY4NDIwXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
		},
		{
			title: 'Toy Story 3',
			year: '2010',
			imbdId: 'tt0435761',
			poster:
				'https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SX300.jpg',
		},
	];

	return (
		<div className='h-screen'>
			<div>
				<MainTitle />{' '}
			</div>
			<div>
				<SearchBar />
			</div>
			<div className='flex space-x-4 overflow-x-auto'>
				{movieSearch.map((movie) => (
					<div key={movie.imbdID} className="flex-shrink-0">
						<MovieResults title={movie.title} poster={movie.poster} />
					</div>
				))}
			</div>
		</div>
	);
}
