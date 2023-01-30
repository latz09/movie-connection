import React, { useState } from 'react';
import ModalOverlay from '../modal/ModalOverlay';
import SearchContent from '../modal/SearchContent';

const HeroOverlay = () => {
	return (
		<div className='grid gap-3 text-center  text-light '>
			<div className='grid text-4xl lg:text-6xl gap-2'>
				<span>
					Explore <span className='text-primary'> millions of movies</span>
				</span>
				<span className='text-2xl lg:text-4xl  '>Discover Hidden Gems </span>
			</div>
			{/* <ModalContainer /> */}
		</div>
	);
};

export default HeroOverlay;

export const ModalContainer = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	return (
		<div className=''>
			<button
				className='my-4 plac-self-end bg-primary  py-4 px-8 text-xl text-white font-sans rounded font-bold tracking-widest'
				onClick={() => {
					setModalIsOpen(true);
				}}
			>
				search
			</button>
			{modalIsOpen && (
				<ModalOverlay setModalIsOpen={setModalIsOpen}>
					<SearchContent />
				</ModalOverlay>
			)}
		</div>
	);
};
