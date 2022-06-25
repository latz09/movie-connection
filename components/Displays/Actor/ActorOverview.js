import Poster from '../../Displays/MovieOverviews/Poster';
import ActorBio from './ActorBio';
import { useState } from 'react';
import Biography from './Biography';

const ActorOverview = ({ bio }) => {
	const [isBioOpen, setIsBioOpen] = useState(false);
	console.log(bio);

	return (
		<>
			{' '}
			<div className='grid justify-center mt-4'>
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
            {isBioOpen && <Biography actorBiography={bio.bio}/>}
		</>
	);
};

export default ActorOverview;
