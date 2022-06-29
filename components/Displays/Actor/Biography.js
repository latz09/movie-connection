const Biography = ({ actorBiography, setIsBioOpen }) => {
	return (
		<div className='prose prose-invert px-3 mx-auto scroll'>
			{actorBiography === '' ? (
				<p>No biography available</p>
			) : (
				<p>{actorBiography}</p>
			)}

			<button
				onClick={() => {
					setIsBioOpen(false);
				}}
				className='text-neon-blue text-lg font-bold hover:font-light'
			>
				close
			</button>
		</div>
	);
};

export default Biography;
