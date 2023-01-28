import Image from 'next/image';
import { imageServer } from '../../../config';
import posterFiller from '../../../public/images/noPosterFiller.jpg';
import { motion } from "framer-motion";

const Poster = ({ src, alt, width, height }) => {
	return (
		<motion.div
			
			className="grid place-items-center  "
			initial={{ opacity: 0, scale: .8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1.2 }}
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
