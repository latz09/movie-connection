import SectionHeading from '../../utils/SectionHeading';
import CastMemberCard from './CastMemberCard';

import Loading from '../../utils/Loading';
import { useState, useEffect } from 'react';
{
	/* //learn lazy load */
}

const AllCastDisplay = ({ data }) => {
	const [cast, setCast] = useState([]);
	useEffect(() => {
		setCast(data);
	}, [data]);

	return (
		<>
			<div className='py-6'>
				{/* <SectionHeading title={neededData.title} />{' '} */}
		

				<ul className='grid md:grid-cols-2 gap-5 justify-center'>
						{cast.map((actor) => (
							<li key={actor.id}>
								<CastMemberCard
									name={actor.name}
									picture={actor.profile_path}
									character={actor.character}
								/>
							</li>
						))}
					</ul>
			</div>
		</>
	);
};

export default AllCastDisplay;
