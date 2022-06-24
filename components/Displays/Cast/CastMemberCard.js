import Poster from '../MovieOverviews/Poster';

const CastMemberCard = ({ name, picture, character }) => {
	return (
		<div className='border'>
			<Poster
				src={picture}
				alt={`A headshot of ${name}`}
				height={200}
				width={150}
			/>
			<h1>{name}</h1>
			<p>{character}</p>
		</div>
	);
};

export default CastMemberCard;

