import Link from 'next/link';
import posterFiller from '../../public/images/noPosterFiller.jpg';
import { imageServer } from '../../config';
import Poster from '../Displays/Poster';

const MovieList = ({ movies }) => {
	return (
		<div className='flex space-x-4  overflow-x-auto mt-8'>
			{movies.map((movie) => (
				<div key={movie.id} className='results'>
					{movie.poster_path === null ? (
						<Link href={`movie/${movie.id}`}>
							<a>
								<Poster
									src={posterFiller}
									alt={`${movie.original_title} movie poster`}
									width={250}
									height={320}
								/>
							</a>
						</Link>
					) : (
						<Link href={`movie/${movie.id}`}>
							<a>
								<Poster
									src={`${imageServer}/w500/${movie.poster_path}`}
									alt={`${movie.original_title} movie poster`}
									width={250}
									height={320}
								/>
							</a>
						</Link>
					)}{' '}
					<div>
						<p className='text-center text-gray-900 text-lg font-semibold tracking-widest'>
							{movie.original_title}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default MovieList;
