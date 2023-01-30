import { imageServer } from '../../../config';

import Image from 'next/image';
import DisplayHeading from './DisplayHeading';

const Backdrop = ({ src, alt, layout, width, height }) => {
	return (
		<Image src={src} alt={alt} width={width} height={height} layout={layout} />
	);
};

export default Backdrop;

// title, backdrop(movie poster),

export const MovieHero = ({ title, backdrop, runtime }) => {
	return (
		<div className='relative w-full  h-[45vh] md:h-[70vh] '>
			<Image
				src={`${imageServer}/w500/${backdrop}`}
				alt='Landscaping around a patio setting'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				
				priority='true'
			/>
			<div className='relative h-full bg-black bg-opacity-60'>
				<DisplayHeading title={title} runtime={runtime} />
			</div>
		</div>
	);
};
