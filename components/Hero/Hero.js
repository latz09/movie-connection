import HeroBackground from './HeroBackground';
import HeroOverlay from './HeroOverlay';
import heroImage from '../../public/images/video-vector.svg';
import Image from 'next/image';

const Hero = () => {
	return (
		<div className='h-[40vh] lg:h-[60vh] grid lg:grid-cols-3 place-items-center gap-8'>
			<div className='w-1/2 order-1'>
				<Image src={heroImage} alt='' />
			</div>
			<div className=' lg:order-1 col-span-2  w-full h-full grid place-items-center'>
				<HeroOverlay />
			</div>
			
		</div>
	);
};

export default Hero;
