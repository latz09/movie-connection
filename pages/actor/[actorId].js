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
		<div className='min-h-screen max-w-7xl mx-auto font-description'>
			{actor ? (
				<div className=''>
					<div className='grid gap-8'>
						<div id='top-bio'>
							<ActorOverview bio={actor.biography} />
						</div>
						<div className="my-2 md:my-4">
							<SectionHeading title={`${actor.biography.name} also in...`} />
						</div>
					</div>
					<div className="mt-8">
						<MovieCategorDisplay data={actor.movies} id={'actor'} />
					</div>
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
};

export async function getStaticProps({ params }) {
	let data;
	try {
		data = await getActorData(params.actorId);
	} catch (error) {
		console.log(error);
		data = [];
	}

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
