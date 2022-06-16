import Image from 'next/image';
import { imageServer } from '../../config';
import posterFiller from '../../public/images/noPosterFiller.jpg';
import Link from 'next/link';

const MovieList = ({ movies }) => { 
	return (
		<div className=''>
			<div className='flex space-x-4  overflow-x-auto mt-8'>
				{movies.map((movie) => (
					<div
						key={movie.id}
						className='flex-shrink-0 text-center  shadow-lg bg-gray-100 rounded-lg border-2 border-gray-600 pb-2 cursor-pointer hover:border-white hover:shadow-2xl'
					>
						{movie.poster_path === null ? (
							<Link href={`movie/${movie.id}`}>
								<Image
									src={posterFiller}
									alt={`${movie.original_title} movie poster`}
									width={250}
									height={320}
								/>
							</Link>
						) : (
							<Link href={`movie/${movie.id}`}>
								<Image
									src={`${imageServer}/w500/${movie.poster_path}`}
									alt={`${movie.original_title} movie poster`}
									width={250}
									height={320}
								/>
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
		</div>
	);
};

export default MovieList;

// export const imageServer = 'https://image.tmdb.org/t/p'
//https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
