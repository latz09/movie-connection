import Link from 'next/link';

const CastLink = ({ movieId }) => {
	return (
		<Link href={`/movies/cast/${movieId}`}>
			<div className='btn-link'>Cast</div>
		</Link>
	);
};

export default CastLink;
