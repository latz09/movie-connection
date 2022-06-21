import HeadingSearch from '../layout/heading/HeadingSearch';
import HeroImage from './HeroImage';
import starwarsImage from '../../public/images/starwars.jpg';
import pulpFictionImage from '../../public/images/pulp-fiction.webp';
import jurassicParkImage from '../../public/images/jurassic-world_2.webp';
import tommyBoyImage from '../../public/images/tommy_boy.jpg';

const HeroBackground = () => {
	return (
		<div>
			<div className='grid opacity-10 grid-cols-2'>
				<HeroImage
					src={starwarsImage}
					alt={'Movie image from Star Wars'}
					height={200}
					width={440}
				/>
				<HeroImage
					src={pulpFictionImage}
					alt={'Movie image from Pulp Fiction'}
					height={200}
					width={440}
				/>
				<HeroImage
					src={jurassicParkImage}
					alt={'Movie image from Jurassic Park'}
					height={200}
					width={440}
				/>
				<HeroImage
					src={tommyBoyImage}
					alt={'Movie image from Tommy Boy'}
					height={200}
					width={440}
				/>
			</div>
		</div>
	);
};

export default HeroBackground;