import Image from 'next/image';
import { imageServer } from '../../config';
import { useState, useEffect } from 'react';
import Overview from './Overview';

const MovieDisplay = ({ data }) => {
	const [details, setDetails] = useState([]);

	useEffect(() => {
		setDetails(data);
	}, [data]);

	return (
		<div className='w-3/4 mx-auto'>
			{details && (
				<div>
					<div className='grid gap-3'>
						<div className='space-y-4 font-medium'>
							<h1 className='text-5xl text-gray-100 font-medium'>
								{details.title}
							</h1>
							<ul className='flex space-x-4'>
								<li>{`1995`}</li>
								<li>{details.rating}</li>
								<li>{details.runtime} min</li>
							</ul>
						</div>
						<div className='flex'>
							<Image
								src={`${imageServer}/w500/${details.poster}`}
								alt={`${details.title} movie poster`}
								width={230}
								height={300}
							/>
						</div>
					</div>
					<Overview genres={details.genres} overview={details.overview} />
				</div>
			)}
		</div>
	);
};

export default MovieDisplay;
