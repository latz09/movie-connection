import { imageServer } from '../../config';
import { useState, useEffect } from 'react';
import Overview from './Overview';
import Poster from './Poster';
import DisplayHeading from './DisplayHeading';
import { YouTubeDisplay, SmallYouTubeDisplay } from './YouTubeDisplay';

const MovieDisplay = ({ data, trailer }) => {
	const [details, setDetails] = useState([]);

	

	useEffect(() => {
		setDetails(data);
	}, [data]);

	return (
		<div className='pb-4 text-neon-blue'>
			{details && (
				<div>
					<DisplayHeading
						title={details.title}
						rating={details.rating}
						runtime={details.runtime}
					/>

					<div className='grid space-x-2 md:flex md:lg:space-x-3 place-content-between xl:place-content-evenly'>
						<div className='self-start'>
							<Poster
								src={`${imageServer}/w500/${details.poster}`}
								alt={`${details.title} movie poster`}
								width={230}
								height={300}
							/>
						</div>
						<div>
						{trailer &&	<YouTubeDisplay videoId={trailer[0].key}/>}
						</div>
					</div>

					<div>
						<Overview genres={details.genres} summary={details.overview} />
					</div>
				</div>
			)}
		</div>
	);
};

export default MovieDisplay;
