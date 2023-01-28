import { imageServer } from '../../../config';
import { useState, useEffect } from 'react';
import Overview from './Overview';
import Poster from './Poster';
import DisplayHeading from './DisplayHeading';
import Backdrop from './Backdrop';
import MovieDescriptionLinks from './MovieDescriptionLinks';
import Loading from '../../utils/Loading';
import { motion } from 'framer-motion';

const MovieDisplay = ({ data }) => {
	const [details, setDetails] = useState([]);

	useEffect(() => {
		setDetails(data);
	}, [data]);

	return (
		<div className='text-neon-blue'>
			{details ? (
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
							<motion.div className='mx-auto text-center'
								initial={{ opacity: 0.02 }}
								animate={{ opacity: .3 }}
								transition={{ duration: 1.8}}
							>
								<Backdrop
									src={`${imageServer}/w500/${details.backdrop}`}
									alt={`{backdrop movie poster of ${details.title}`}
									width={1070}
									height={470}
									
								/>
							</motion.div>
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
