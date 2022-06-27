const Biography = ({ actorBiography }) => {
	return (
		<div className='prose-invert tracking-widest leading-6  px-5 py-4  m-4 rounded-lg bg-gray-800 bg-opacity-20'>
			{' '}
			<p>{actorBiography}</p>
		</div>
	);
};

export default Biography;
