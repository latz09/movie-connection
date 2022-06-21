import HeroBackground from './HeroBackground';
import HeroOverlay from './HeroOverlay';

const Hero = () => {
	return (
		<div className='relative overflow-hidden h-52 md:h-96 max-w-6xl mx-auto'>
			<div className='absolute inset-0'>
				<HeroBackground />
			</div>
			<div className='flex flex-col place-items-center content-center'>
				<HeroOverlay />
			</div>
		</div>
	);
};

export default Hero;
