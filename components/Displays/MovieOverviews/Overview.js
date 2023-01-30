const Overview = ({ summary, genres }) => {
	return (
		<div className="grid gap-4 lg:my-4">
			<div className='flex justify-around items-center'>
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
