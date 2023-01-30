import Poster from '../MovieOverviews/Poster';

const CastMemberCard = ({ name, picture, character }) => {
	return (
		<div className='card-cast  font-description'>
			<div className='grid gap-4 hover:text-primary transition duration-700'>
				<div className='place-self-center hover:scale-110 transition duration-700'>
					<Poster
						src={picture}
						alt={`A headshot of ${name}`}
						height={220}
						width={170}
					/>
				</div>
				<div className=''>
					<h1 className='text-center text-lg border-b pb-1 border-primary text-primar'>{name}</h1>
					<div className='pt-4'>
						<p className='text-sm text-center'>{character}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CastMemberCard;
