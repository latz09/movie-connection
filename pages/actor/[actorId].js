import { getActorData } from '../../utils/fetchActors/getActorResults';
import { useState, useEffect } from 'react';
import Loading from '../../components/utils/Loading';
import ActorOverview from '../../components/Displays/Actor/ActorOverview';

const ActorDetails = (data) => {
	const [actor, setActorData] = useState();

	useEffect(() => {
		setActorData(data.data);
	}, [data]);

	return (
		<div className='min-h-screen font-description'>
			{actor ? (
				<div>
					<ActorOverview bio={actor.biography} />
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
