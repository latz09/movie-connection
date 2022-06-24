import { imageServer } from '../../config';
import { useState, useEffect } from 'react';
import Overview from './Overview';
import Poster from './Poster';
import DisplayHeading from './DisplayHeading';
import Backdrop from './Backdrop';

import VideoLink from '../Videos/VideoLink';

const MovieDisplay = ({ data }) => {
	const [details, setDetails] = useState([]);

	//video id is in details.trailerId
	//need to figure out how to filter it to just give the key to trailerButton
	//maybe best to do it in getResults...or possibly in props
	//try props from [movieId]

	useEffect(() => {
		setDetails(data);
	}, [data]);

	return (
		<div className='text-neon-blue'>
			{details && (
				<div>
					<div className='relative'>
						{details.backdrop === null ? (
							<div className='flex justify-center opacity-30'>
								<Poster
									src={`${imageServer}/w500/${details.poster}`}
									alt={`${details.title} movie poster`}
									height={300}
									width={300}
								/>
							</div>
						) : (
							<div className='mx-auto text-center opacity-30'>
								<Backdrop
									src={`${imageServer}/w500/${details.backdrop}`}
									alt={`{backdrop movie poster of ${details.title}`}
									width={1200}
									height={600}
									layout='intrinsic'
								/>
							</div>
						)}
						<div className='p-3 absolute inset-0 max-w-5xl mx-auto  flex flex-col'>
							<DisplayHeading title={details.title} runtime={details.runtime} />
						</div>
					</div>

					<div className='mx-auto max-w-5xl p-2'>
						{details.trailerId === null ? (
							''
						) : (
							<div className='md:text-xl pb-3'>
								<VideoLink trailerId={details.trailerId} />
							</div>
						)}

						<Overview genres={details.genres} summary={details.overview} />
					</div>
				</div>
			)}
		</div>
	);
};

//xl:ml-24 2xl:pl-24 2xl:pt-8
export default MovieDisplay;
