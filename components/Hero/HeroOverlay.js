import React, { useState } from 'react';
import ModalOverlay from '../modal/ModalOverlay';
import SearchContent from '../modal/SearchContent';

const HeroOverlay = () => {
	return (
		<div className='grid gap-3 text-center'>
			<div className='grid text-5xl gap-2'>
				<span>Explore millions of movies</span>
				<span className='text-3xl text-cyan-200'>Discover Hidden Gems</span>
			</div>
			<ModalContainer />
		</div>
	);
};

export default HeroOverlay;

export const ModalContainer = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	return (
		<div className="text-cente">
			<button
				className='my-4 place-self-end bg-cyan-400 p-4 text-xl text-black font-sans rounded-2xl font-bold tracking-widest'
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
