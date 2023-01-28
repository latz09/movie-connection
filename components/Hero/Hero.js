import HeroBackground from './HeroBackground';
import HeroOverlay from './HeroOverlay';
import heroImage from '../../public/images/video-vector.svg';
import Image from 'next/image';

const Hero = () => {
	return (
		<div className='h-[60vh] grid lg:grid-cols-3 place-items-center gap-8'>
			<div className='lg:col-span-2  w-full h-full grid place-items-center'>
				<HeroOverlay />
			</div>
			<div className='w-1/2'>
				<Image src={heroImage} alt='' />
			</div>
		</div>
	);
};

export default Hero;
