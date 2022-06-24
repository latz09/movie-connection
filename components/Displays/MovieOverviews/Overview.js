const Overview = ({ summary, genres }) => {
	return (
		<div>
			<div className='grid grid-cols-3 md:grid-cols-5 py-2 md:py-4 gap-1 content-center'>
				{genres
					? genres.map((genre) => (
							<div key={genre.id} className='btn-genre'>
								{genre.name}
							</div>
					  ))
					: ''}
			</div>
			<div className='movie-summary font-description'>
				<p>{summary}</p>
			</div>
		</div>
	);
};

export default Overview;
