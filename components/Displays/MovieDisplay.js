import { imageServer } from '../../config';
import { useState, useEffect } from 'react';
import Overview from './Overview';
import Poster from './Poster';
import DisplayHeading from './DisplayHeading';

const MovieDisplay = ({ data }) => {
	const [details, setDetails] = useState([]);


	useEffect(() => {
		setDetails(data);
	}, [data]);

	return (
		<div className='w-3/4 mx-auto pb-4 text-neon-blue'>
			{details && (
				<div>
					<DisplayHeading
						title={details.title}
						rating={details.rating}
						runtime={details.runtime}
					/>
					<div className='pt-4'>
						<Poster
							src={`${imageServer}/w500/${details.poster}`}
							alt={`${details.title} movie poster`}
							width={230}
							height={300}
						/> 
					</div>
					<div>
						<Overview genres={details.genres} overview={details.overview} />
					</div>
				</div>
			)}
		</div>
	);
};

export default MovieDisplay;
