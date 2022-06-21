const Overview = ({ overview, genres }) => {
	return (
		<div>
			<ul className='flex space-x-2 py-4'>
				{genres
					? genres.map((genre) => (
							<li
								key={genre.id}
								className='bg-gray-900 rounded border border-gray-600 cursor-pointer py-1 px-2 hover:border-gray-300 hover:shadow hover:shadow-gray-100'
							>
								{genre.name}
							</li>
					  ))
					: ''}
			</ul>
			<div className='text-gray-200 tracking-widest leading-6 text-center'>
				<p>{overview}</p>
			</div>
		</div>
	);
};

export default Overview;
