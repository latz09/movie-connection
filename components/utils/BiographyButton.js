const BiographyButton = ({ setIsBioOpen, isBioOpen}) => {
	return (
		<button
			onClick={() => {
				{
				setIsBioOpen(!isBioOpen)
				}
			}}
		>
			Biography
		</button>
	);
};

export default BiographyButton;
