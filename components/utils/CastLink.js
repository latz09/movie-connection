import Link from 'next/link'

const CastLink = ({movieId}) => {
	return (
		<Link href={`/movies/cast/${movieId}`}>
			<button className="btn-link">Cast</button>
		</Link>
	);
};

export default CastLink;
