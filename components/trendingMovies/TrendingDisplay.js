import Link from 'next/link';
import { imageServer } from '../../config';
import Poster from '../Displays/Poster';
import SectionHeading from '../utils/SectionHeading';

const TrendingDisplay = ({ data }) => {
	// console.log(data)

	return (
		<>
			<div className='p-8'>
				<SectionHeading title={'Trending Movies this Week'} />
			</div>
			<div className='flex space-x-4 overflow-x-auto'>
				{data.map((movie) => (
					<div key={movie.id} className='results'>
						<Link href={`/movies/${movie.id}`}>
							<a>
								<Poster
									src={`${imageServer}/w500/${movie.poster_path}`}
									alt={movie.title}
									width={250}
									height={320}
								/>
							</a>
						</Link>
					</div>
				))}
			</div>
		</>
	);
};

export default TrendingDisplay;
