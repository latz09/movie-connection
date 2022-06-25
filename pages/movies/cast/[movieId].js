import AllCastDisplay from '../../../components/Displays/Cast/AllCastDisplay';
import Loading from '../../../components/utils/Loading'
import { getMovieCredits } from '../../../utils/fetchMovies/getMovieCredits';
import { getMovieDetails } from '../../../utils/fetchMovies/getMovieDetails';
import { useState, useEffect } from 'react';

const CastPage = ({ castData, title }) => {
	const [cast, setCast] = useState([]);

	useEffect(() => {
		setCast(castData);
	}, [castData]);


	return (
		<div className='min-h-screen max-w-5xl mx-auto'>
			{cast ? (
				<div>
					{' '}
					<AllCastDisplay castData={castData} title={title} />
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
};

export async function getStaticProps({ params }) {
	const castData = await getMovieCredits(params.movieId);
	const movieData = await getMovieDetails(params.movieId);

	return {
		props: {
			castData, title: movieData.title
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
