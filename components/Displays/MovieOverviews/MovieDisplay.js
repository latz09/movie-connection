import { imageServer } from '../../../config';
import { useState, useEffect } from 'react';
import Overview from './Overview';
import Poster from './Poster';
import DisplayHeading from './DisplayHeading';
import Backdrop, { MovieHero } from './Backdrop';
import MovieDescriptionLinks from './MovieDescriptionLinks';
import Loading from '../../utils/Loading';
import { motion } from 'framer-motion';

const MovieDisplay = ({ data }) => {
	const [details, setDetails] = useState([]);
	
	useEffect(() => {
		setDetails(data);
	}, [data]);

	return (
		<div className=''>
			{details ? (
				<div>
					<div className='relative'>
						{details.backdrop === null ? (
							<MovieHero
								title={details.title}
								runtime={details.runtime}
								backdrop={details.poster}
							/>
							
						) : (
							<MovieHero
								title={details.title}
								runtime={details.runtime}
								backdrop={details.backdrop}
							/>
						
						)}
					</div>

					<div className='mx-auto max-w-7xl my-8 grid gap-4 '>
						{details.trailerId === null ? (
							''
						) : (
							<div className='md:text-xl '>
								<MovieDescriptionLinks
									trailerId={details.trailerId}
									movieId={details.id}
								/>
							</div>
						)}

						<Overview genres={details.genres} summary={details.overview} />
					</div>
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default MovieDisplay;
