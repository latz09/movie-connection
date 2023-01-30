import Link from 'next/link';
import SectionHeading from '../../utils/SectionHeading';
import CastMemberCard from './CastMemberCard';
import BackButton from '../../utils/BackButton';
import { useState, useEffect } from 'react';

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
			<div className='grid'>
				<div className='text-center my-8'>
					<BackButton />
				</div>
				<SectionHeading title={title} />
			</div>
			<ul className='container-cast'>
				{cast.map((actor) => (
					<Link href={`/actor/${actor.id}`} key={actor.name}>
						<li>
							<CastMemberCard
								name={actor.name}
								picture={actor.profile_path}
								character={actor.character}
							/>
						</li>
					</Link>
				))}
			</ul>
		</>
	);
};

export default AllCastDisplay;
