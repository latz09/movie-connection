import AllCastDisplay from '../../../components/Displays/Cast/AllCastDisplay';
import { getMovieCredits, getMovieDetails } from '../../../utils/getResults';
import { useState, useEffect } from 'react';
const CastPage = ({ data }) => {
	const [castMembers, setCastMembers] = useState([]);

	useEffect(() => {
		setCastMembers(data);
	}, [data]);

	return (
		<div className='min-h-screen'>
			{' '}
			{castMembers && <AllCastDisplay data={castMembers.castMembers} />}
		</div>
	);
};


export async function getStaticProps({ params }) {
	const castData = await getMovieCredits(params.movieId);
	const movieData = await getMovieDetails(params.movieId);
	const castMembers = castData.cast;

	return {
		props: {
			data: { castMembers },
		},
	};
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}

export default CastPage;
