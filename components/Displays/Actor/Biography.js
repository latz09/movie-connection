import ScrollUpBtn from '../../utils/ScrollUpBtn';

const Biography = ({ actorBiography }) => {
	return (
		<div className='prose prose-invert px-3 mx-auto '>
			{actorBiography === '' ? (
				<p>No biography available</p>
			) : (
				<p>{actorBiography}</p>
			)}
			{actorBiography.length > 1000 && (
				<div className='flex justify-center'>
					<button className='text-neon-blue text-lg font-bold hover:font-light '>
						<ScrollUpBtn href={'#top-bio'} />
					</button>
				</div>
			)}
		</div>
	);
};

export default Biography;
