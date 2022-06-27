import { BiDownArrow, BiUpArrow } from 'react-icons/bi';

const BiographyButton = ({ setIsBioOpen, isBioOpen }) => {
	return (
		<button
			className='bg-neon-blue py-1 px-7 rounded text-center font-bold hover:opacity-75 border border-neon-blue hover:border '
			onClick={() => {
				{
					setIsBioOpen(!isBioOpen);
				}
			}}
		>
			<div className='flex place-items-center space-x-4'>
				<span>Biography</span>
				{isBioOpen ? (
					<BiUpArrow className='text-xl' />
				) : (
					<BiDownArrow className='text-xl' />
				)}
			</div>
		</button>
	);
};

export default BiographyButton;
