import HeroBackground from './HeroBackground';
import HeroOverlay from './HeroOverlay';
import heroImage from '../../public/images/video-vector.svg';
import Image from 'next/image';

const Hero = () => {
	return (
		<div className='h-[70vh] grid grid-cols-3 place-items-center gap-8'>
			<div className=''>
				<Image src={heroImage} alt='Movie image from Star Wars' />
			</div>
			<div className='col-span-2  w-full h-full grid place-items-center'>
				<HeroOverlay />
				
			</div>
		</div>
	);
};

export default Hero;
