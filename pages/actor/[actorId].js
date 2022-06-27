import { getActorData } from '../../utils/fetchActors/getActorData';
import { useState, useEffect } from 'react';
import Loading from '../../components/utils/Loading';
import ActorOverview from '../../components/Displays/Actor/ActorOverview';
import MovieCategorDisplay from '../../components/Displays/MovieOverviews/MovieCategoryDisplay';
import SectionHeading from '../../components/utils/SectionHeading';

const ActorDetails = (data) => {
	const [actor, setActorData] = useState();

	useEffect(() => {
		setActorData(data.data);
	}, [data]);

	return (
		<div className='min-h-screen max-w-5xl mx-auto font-description'>
			{actor ? (
				<div>
					<div>
						<ActorOverview bio={actor.biography} />
					</div>
					<SectionHeading title={'also in...'} />
					<div className='p-4'>
						<MovieCategorDisplay data={actor.movies} />
					</div>
				</div>
			) : (
				<Loading />
			)}
			
		</div>
	);
};

export async function getStaticProps({ params }) {
	const data = await getActorData(params.actorId);

	return {
		props: {
			data,
		},
	};
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}

export default ActorDetails;


/*  



*/