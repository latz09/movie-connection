const Overview = ({ summary, genres }) => {
	return (
		<div className="grid gap-4 lg:my-4">
			<div className='grid grid-cols-3 place-items-center gap-2 lg:gap-0 lg:flex justify-around items-center'>
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
