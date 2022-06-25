import SectionHeading from '../../utils/SectionHeading';
import CastMemberCard from './CastMemberCard';

import { useState, useEffect } from 'react';
import BackButton from '../../utils/BackButton';
{
	/* //learn lazy load */
}

const AllCastDisplay = ({ castData, title }) => {
	const [cast, setCast] = useState([]);

	useEffect(() => {
		if (!castData) {
			setCast(null);
		} else {
			setCast(castData.cast);
		}
	}, [castData]);

	return (
		<>
			{' '}
			<div className='my-8'>
				
				<SectionHeading title={title} />
				<div className="text-center">
					<BackButton />
				</div>
			</div>
			<ul className='container-cast'>
				{cast.map((actor) => (
					<li key={actor.name}>
						<CastMemberCard
							name={actor.name}
							picture={actor.profile_path}
							character={actor.character}
						/>
					</li>
				))}
			</ul>
		</>
	);
};

export default AllCastDisplay;
