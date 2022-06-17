

const Overview = ({ overview, genres }) => {
	return (
		<div>
			<ul className="flex space-x-5">
                {genres ? genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                )): ''}
			
			</ul>
            <div>
                <p>{overview}</p>
            </div>
		</div>
	);
};

export default Overview;
		