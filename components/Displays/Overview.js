const Overview = ({ summary, genres }) => {
	return (
		<div>
			<div className='grid grid-cols-3 md:grid-cols-5 md:py-4 gap-1 content-center'>
				{genres
					? genres.map((genre) => (
							<div
								key={genre.id}
								className='bg-gray-900 rounded border border-gray-600 cursor-pointer py-1 hover:border-gray-300 hover:shadow hover:shadow-gray-100 text-center md:py-2'
							>
								{genre.name}
							</div>
					  ))
					: ''}
			</div>
			<div className='text-gray-200 tracking-widest leading-6 text-center'>
				<p>{summary}</p>
			</div>
		</div>
	);
};

export default Overview;
