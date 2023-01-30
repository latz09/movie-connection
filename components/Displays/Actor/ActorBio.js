import ModalOverlay from '../../modal/ModalOverlay';
import BiographyButton from '../../utils/BiographyButton';
import Biography from './Biography';
import {motion } from 'framer-motion'

const ActorBio = ({ modalCommands, bio }) => {
	return (
		<>
			<div className='grid'>
				<h1 className='text-lg font-bold text-primary uppercase'>{bio.name}</h1>
				<ul className='self-end grid gap-4'>
					<li>{bio.age }</li>
					<li>{bio.birthPlace}</li>
					<li className="'">
						<OpenBiographyModal modalCommands={modalCommands} bio={bio.bio} />
					</li>
				</ul>
			</div>
		</>
	);
};

export default ActorBio;

const OpenBiographyModal = ({ modalCommands, bio }) => {
	const { modalIsOpen, setModalIsOpen } = modalCommands;
	return (
		<button
			onClick={() => {
				setModalIsOpen(!modalIsOpen);
			}}
		>
			<motion.div className=" text-primary text-2xl font-bold">Biography</motion.div>

			{modalIsOpen && (
					<ModalOverlay setModalIsOpen={setModalIsOpen}>
						<Biography actorBiography={bio} />
					</ModalOverlay>
				)}
		</button>
	);
};
