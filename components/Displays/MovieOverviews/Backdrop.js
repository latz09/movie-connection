import { imageServer } from '../../../config';

import Image from 'next/image';
import DisplayHeading from './DisplayHeading';


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
			<div className='relative grid place-items-end w-full h-full bg-gradient-to-t from-dark/90 via-dark/50 to-dark/20'>
				<DisplayHeading title={title} runtime={runtime} />
			</div>
		</div>
	);
};
