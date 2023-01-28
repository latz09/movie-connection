import HeroBackground from './HeroBackground';
import HeroOverlay from './HeroOverlay';
import heroImage from '../../public/images/video-vector.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<div className='h-[40vh] lg:h-[60vh] grid lg:grid-cols-3 place-items-center gap-8'>
			<motion.div
				className='w-1/2 order-1'
				initial={{ opacity: 1, scale: 1.2 }}
				animate={{ opacity: 0.7, scale: 0.98 }}
				transition={{ duration: 2.6, delay: 0.2 }}
			>
				<Image src={heroImage} alt='' />
			</motion.div>
			<motion.div
				className=' lg:order-1 col-span-2  w-full h-full grid place-items-center'
				initial={{ opacity: .6, scale: .8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.3, delay: 0.2 }}
			>
				<HeroOverlay />
			</motion.div>
		</div>
	);
};

export default Hero;
