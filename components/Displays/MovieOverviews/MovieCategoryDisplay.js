import Link from 'next/link';
import { imageServer } from '../../../config';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import posterFiller from '../../../public/images/noPosterFiller.jpg';
import Poster from './Poster';

const MovieCategoryDisplay = ({ data, id, clearResults }) => {
	const slideLeft = () => {
		let slider = document.getElementById(id);
		slider.scrollLeft = slider.scrollLeft - 500;
	};

	const slideRight = () => {
		let slider = document.getElementById(id);
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	return (
		<div className='relative flex items-center max-w-6xl mx-auto'>
			{' '}
			<div className={`${data.length < 1 ? 'hidden' : 'block'}`}>
				<AiOutlineArrowLeft
					size={50}
					className='scroll-arrow'
					onClick={slideLeft}
				/>
			</div>
			<div id={id} className='scroll-overflow'>
				{data.map((movie) => (
					<div key={movie.id} className='results'>
						<Link href={`/movies/${movie.id}`}>
							<a onClick={clearResults}>
								<Poster
									src={
										movie.poster_path === null
											? posterFiller
											: `${imageServer}/w500/${movie.poster_path}`
									}
									alt={movie.title}
									width={250}
									height={320}
								/>
							</a>
						</Link>
					</div>
				))}
			</div>
			{/* src={`${imageServer}/w500/${movie.poster_path}`}	 */}
			<div className={`${data.length < 1 ? 'hidden' : 'block'}`}>
				<AiOutlineArrowRight
					size={50}
					className='scroll-arrow '
					onClick={slideRight}
				/>
			</div>
		</div>
	);
};

export default MovieCategoryDisplay;