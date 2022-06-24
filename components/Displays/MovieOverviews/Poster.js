import Image from 'next/image';
import { imageServer } from '../../../config';

const Poster = ({ src, alt, width, height }) => {
	
	return <Image src={`${imageServer}/w500/${src}`} alt={alt} width={width} height={height}/>;
};

export default Poster;


