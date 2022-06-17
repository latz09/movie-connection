const Overview = ({ overview, genres }) => {
	return (
		<div>
			<ul className='flex space-x-5 py-3'>
				{genres
					? genres.map((genre) => (
							<li
								key={genre.id}
								className='font-medium border px-3 py-1 rounded-full shadow shadow-gray-600 hover:shadow-lg hover:shadow-gray-400'
							>
								{genre.name}
							</li>
					  ))
					: ''}
			</ul>
			<div className='text-white font-medium tracking-widest leading-6'>
				<p>{overview}</p>
			</div>
		</div>
	);
};

export default Overview;
