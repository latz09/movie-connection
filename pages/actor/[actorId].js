import { getActorData } from '../../utils/fetchActors/getActorResults';

const ActorDetails = (actorData) => {
    // console.log(actorData)
	return (
		<div className='min-h-screen'>
			<h1>actor details page</h1>
		</div>
	);
};

export async function getStaticProps({ params }) {
	const actorData = await getActorData(params.actorId);

	return {
		props: {
			actorData,
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
