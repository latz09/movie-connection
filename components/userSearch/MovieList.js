import Image from 'next/image';
import { imageServer } from '../../config';

const MovieList = ({ movies }) => {	
	return (
		<div className=''>
			<div className='p-3 shadow-md hover:shadow-xl'>
				{/* for each movie map through */}
				{movies.map((movie) => (
					<div key={movie.id}>
						<Image
							src={`${imageServer}/w500/${movie.poster_path}`}
							alt={`${movie.original_title} movie poster`}
							width={250}
							height={320}
						/>
						<p>{movie.original_title}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default MovieList;

// export const imageServer = 'https://image.tmdb.org/t/p'
//https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
