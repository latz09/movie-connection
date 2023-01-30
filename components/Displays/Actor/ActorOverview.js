import Poster from '../../Displays/MovieOverviews/Poster';
import ActorBio from './ActorBio';
import { useState } from 'react';
import Biography from './Biography';
import BackButton from '../../utils/BackButton';
import ModalOverlay from '../../modal/ModalOverlay';

const ActorOverview = ({ bio }) => {
	console.log(bio)
	const [modalIsOpen, setModalIsOpen] = useState(false);
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
						bio={bio}
						modalCommands={{ modalIsOpen, setModalIsOpen }}
					/>
				</div>
			</div>
		</>
	);
};

export default ActorOverview;
