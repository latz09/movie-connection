import Link from 'next/link';
import { imageServer } from '../../../config';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import posterFiller from '../../../public/images/noPosterFiller.jpg';
import Poster from './Poster';
import { motion } from 'framer-motion';

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
		<div className='relative flex space-x-2 sm:space-x-8 items-center max-w-7xl mx-auto'>
			{' '}
			<motion.div
				className={`${data.length < 1 ? 'hidden' : 'block'}`}
				initial={{ opacity: 0.75, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 1.4,
					repeat: Infinity,
					repeatType: 'mirror',
					ease: 'easeInOut',
				}}
			>
				<AiOutlineArrowLeft
					size={50}
					className='scroll-arrow'
					onClick={slideLeft}
				/>
			</motion.div>
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
			<motion.div
				className={`${data.length < 1 ? 'hidden' : 'block'}`}
				initial={{ opacity: 0.75, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 1.4,
					repeat: Infinity,
					repeatType: 'mirror',
					ease: 'easeInOut',
				}}
			>
				<AiOutlineArrowRight
					size={50}
					className='scroll-arrow '
					onClick={slideRight}
				/>
			</motion.div>
		</div>
	);
};

export default MovieCategoryDisplay;
