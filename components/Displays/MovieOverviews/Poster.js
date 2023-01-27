import Image from 'next/image';
import { imageServer } from '../../../config';
import posterFiller from '../../../public/images/noPosterFiller.jpg';
import { motion } from 'framer-motion';

const Poster = ({ src, alt, width, height }) => {
	return (
		<motion.div
			initial={{ scale: 0.2, opacity: 0.1 }}
			whileInView={{ scale: 1, opacity: 1 }}
			transition={{ duration: 1.1 }}
			className="grid place-items-center "
		>
			<Image
				src={src === null ? posterFiller.src : `${imageServer}/w500/${src}`}
				alt={alt}
				width={width}
				height={height}
			/>
		</motion.div>
	);
};

export default Poster;
