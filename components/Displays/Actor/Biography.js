const Biography = ({ actorBiography, setIsBioOpen }) => {
	return (
		<div className='prose prose-invert px-3 mx-auto'>
			<p>{actorBiography}</p>
			<button
				onClick={() => {
					setIsBioOpen(false);
				}}
			>
				close
			</button>
		</div>
	);
};

export default Biography;
