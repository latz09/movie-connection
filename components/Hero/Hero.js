import HeroBackground from './HeroBackground';
import HeroOverlay from './HeroOverlay';
import heroImage from '../../public/images/video-vector.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<div className='h-[60vh] grid lg:grid-cols-3 place-items-center lg:gap-8 max-w-7xl mx-auto'>
			<motion.div
				className='order-2 lg:order-1 w-2/3 lg:w-full'
				initial={{ opacity: 0.8, scale: 1.2 }}
				animate={{ opacity: 0.4, scale: 0.8 }}
				transition={{ duration: 2.9, delay: 0.5 }}
			>
				<motion.div
					initial={{ scale: 0.8 }}
					animate={{ scale: .83 }}
					transition={{ delay: 3.4, repeat: Infinity, repeatType: 'mirror', duration: 1.4, ease: 'easeInOut' }}
				>
					<Image src={heroImage} alt='' />
				</motion.div>
			</motion.div>
			<motion.div
				className='order-1 lg:order-2 lg:col-span-2  w-full h-full grid place-items-center'
				initial={{ opacity: 0.6, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.3, delay: 0.2 }}
			>
				<HeroOverlay />
			</motion.div>
		</div>
	);
};

export default Hero;
