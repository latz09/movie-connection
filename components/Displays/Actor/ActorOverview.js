import Poster from '../../Displays/MovieOverviews/Poster';
import ActorBio from './ActorBio';
import { useState } from 'react';
import Biography from './Biography';
import BackButton from '../../utils/BackButton';

const ActorOverview = ({ bio }) => {
	const [isBioOpen, setIsBioOpen] = useState(false);


	return (
		<>
			{' '}
			<div className='text-center py-4'>
				<BackButton />
			</div>
			<div className='grid justify-center mt-4 '>
				<div className='flex space-x-4'>
					{' '}
					<div>
						<Poster
							src={bio.image}
							alt={`image of ${bio.name}`}
							height={230}
							width={180}
						/>
					</div>
					<ActorBio
						name={bio.name}
						age={bio.age}
						birthPlace={bio.birthPlace}
						setIsBioOpen={setIsBioOpen}
						isBioOpen={isBioOpen}
					/>
				</div>
			</div>
			<div className='my-12 max-w-3xl mx-auto'>
				{isBioOpen && (
					<div className=''>
						<Biography actorBiography={bio.bio} setIsBioOpen={setIsBioOpen}/>
					</div>
				)}
			</div>
			
		</>
	);
};

export default ActorOverview;
