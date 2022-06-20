import Link from 'next/link';
import { useRouter } from 'next/router';
import posterFiller from '../../public/images/noPosterFiller.jpg';
import { imageServer } from '../../config';
import Poster from '../Displays/Poster';

const MovieList = ({ movies, clearResults }) => { 
	const router = useRouter();
	return (
		<div className='flex space-x-4 overflow-x-auto mt-8'>
			{movies.map((movie) => (
				<div key={movie.id} className='results'>
					{movie.poster_path === null ? (
						<Link
							href={
								router.pathname.includes('movies')
									? `${movie.id}`
									: `movies/${movie.id}`
							}
						> 
							<a onClick={clearResults}>
								<Poster
									src={posterFiller}
									alt={`${movie.original_title} movie poster`}
									width={250}
									height={320}
								/>
							</a>
						</Link>
					) : (
						<Link
							href={
								router.pathname.includes('movies')
									? `${movie.id}`
									: `movies/${movie.id}`
							}
						>
							<a onClick={clearResults}>
								<Poster
									src={`${imageServer}/w500/${movie.poster_path}`}
									alt={`${movie.original_title} movie poster`}
									width={250}
									height={320}
								/>
							</a>
						</Link>
					)}{' '}
				
				</div>
			))}
		</div>
	);
};

export default MovieList;
