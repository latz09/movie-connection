import Image from 'next/image';
import { imageServer } from '../../config';
import { useState, useEffect } from 'react';

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
						<div>
							<Image
								src={`${imageServer}/w500/${details.poster}`}
								alt={`${details.title} movie poster`}
								width={230}
								height={300}
							/>
						</div>
					</div>
					<ul className='flex space-x-5'>
						{details.genres &&
							details.genres.map((genre) => (
								<li key={genre.id}>{genre.name}</li>
							))}
					</ul>
					<div>
						<p>{details.overview}</p>
					</div>
				</div>

				// <div className='grid gap-2'>
				// 	<div></div>
				// 	<h1 className='text-5xl text-gray-200 pl-3'>{details.title}</h1>
				// 	<ul className='pl-3'>
				// 		<li>{releaseDate.certification}</li>
				// 	</ul>
				// 	<div className='p-4'>
				// 		<Image
				// 			src={`${imageServer}/w500/${details.poster_path}`}
				// 			alt={`${details.title} movie poster`}
				// 			width={230}
				// 			height={300}
				// 		/>
				// 	</div>
				// </div>
			)}
		</div>
	);
};

export default MovieDisplay;
