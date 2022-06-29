import Poster from '../MovieOverviews/Poster';

const CastMemberCard = ({ name, picture, character }) => {
	return (
		<div className='card-cast hover:opacity-80 hover:shadow hover:shadow-gray-800  font-description'>
			<div className='grid gap-1'>
				<div className='place-self-center  rounded-lg'>
					<Poster
						src={picture}
						alt={`A headshot of ${name}`}
						height={200}
						width={150}
					/>
				</div>
				<div className=''>
					<h1 className='text-center border-b border-gray-600 p-1'>{name}</h1>
					<div className='pt-4'>
						<p className='text-xs text-gray-300 text-center'>{character}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CastMemberCard;
