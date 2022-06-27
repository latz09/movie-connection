import Link from 'next/link';
import { imageServer } from '../../../config';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Poster from './Poster';

const MovieCategoryDisplay = ({ data, id }) => {
	const slideLeft = () => {
		let slider = document.getElementById(id);
		slider.scrollLeft = slider.scrollLeft - 500;
	};

	const slideRight = () => {
		let slider = document.getElementById(id);
		slider.scrollLeft = slider.scrollLeft + 500;
	};
	console.log(data);

	return (
		<div className='relative flex items-center space-x-4 px-4'>
			{' '}
			<div className={`${data.length < 1 ? 'hidden' : 'block'}`}>
				<AiOutlineArrowLeft
					size={50}
					className='hidden sm:block p-1 rounded text-3xl text-gray-600 hover:text-gray-300 cursor-pointer '
					onClick={slideLeft}
				/>
			</div>
			<div
				id={id}
				className='flex space-x-4 overflow-x-scroll scroll scroll-smooth whitespace-nowrap sm:scrollbar-hide'
			>
				{data.map((movie) => (
					<div key={movie.id} className='results snap-center'>
						<Link href={`/movies/${movie.id}`}>
							<a>
								<Poster
									src={`${imageServer}/w500/${movie.poster_path}`}
									alt={movie.title}
									width={250}
									height={320}
								/>
							</a>
						</Link>
					</div>
				))}
			</div>
			<div className={`${data.length < 1 ? 'hidden' : 'block'}`}>
				<AiOutlineArrowRight
					size={50}
					className='hidden sm:block p-1 rounded text-3xl text-gray-600 hover:text-gray-300 cursor-pointer  '
					onClick={slideRight}
				/>
			</div>
		</div>
	);
};

export default MovieCategoryDisplay;
