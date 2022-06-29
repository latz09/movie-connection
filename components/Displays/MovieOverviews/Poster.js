import Image from 'next/image';
import { imageServer } from '../../../config';
import posterFiller from '../../../public/images/noPosterFiller.jpg';

const Poster = ({ src, alt, width, height }) => {
	return (
		<Image
			src={src === null ? posterFiller.src : `${imageServer}/w500/${src}`}
			alt={alt}
			width={width}
			height={height}
		/>
	);
};

export default Poster;
