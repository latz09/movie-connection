import BiographyButton from '../../utils/BiographyButton';

const ActorBio = ({ name, age, birthPlace, setIsBioOpen, isBioOpen }) => {
	return (
		<>
			<div className='grid'>
				<h1 className='text-lg'>{name}</h1>
				<ul className='self-end space-y-2'>
					<li>{age}</li>
					<li>{birthPlace}</li>
					<li className="bg-neon-blue py-1 text-center font-bold'">
						<BiographyButton
							setIsBioOpen={setIsBioOpen}
							isBioOpen={isBioOpen}
						/>
					</li>
				</ul>
			</div>
		</>
	);
};

export default ActorBio;
