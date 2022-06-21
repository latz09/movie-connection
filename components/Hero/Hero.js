import HeroBackground from './HeroBackground';

const Hero = () => {
	return (
		<div className='relative overflow-hidden h-52 md:h-96 max-w-6xl mx-auto'>
			<div className='absolute inset-0'>
				<HeroBackground />
			</div>
			<div></div>
			<div className='flex flex-col place-items-center content-center space-y-4 xs:space-y-6 xs:space-y-4 pt-3 pb-7 sm:space-y-7 md:pt-12'>
				<h1 className='text-5xl sm:text-7xl md:text-9xl text-neon-blue font-extrabold '>
					EXPLORE
				</h1>
				<p className='text-sm sm:text-xl md:text-3xl lg:2xl'>Search millions of movies</p>

				<p className='text-sm sm:text-base'>Discover hidden gems</p>
			</div>
		</div>
	);
};

export default Hero;
