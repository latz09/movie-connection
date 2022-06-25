const BiographyButton = ({ setIsBioOpen, isBioOpen}) => {
	return (
		<button
			onClick={() => {
				{
					!isBioOpen ? setIsBioOpen(true) : setIsBioOpen(false);
				}
			}}
		>
			Biography
		</button>
	);
};

export default BiographyButton;
