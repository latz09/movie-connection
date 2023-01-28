import { AnimatePresence, motion } from 'framer-motion';

const ModalOverlay = ({ children, setModalIsOpen }) => {
	const backDropVariant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.4,
				delay: 0.02,
			},
		},
		exit: {
			x: '100vw',
			opacity: 0,
			transition: { delay: 0.2, duration: 1 },
		},
	};

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				variants={backDropVariant}
				initial='hidden'
				animate='visible'
				exit='exit'
				className='fixed top-0 left-0 w-full h-full  z-10 bg-light/30 backdrop-blur '
			>
				<div className="h-5/6 flex flex-col max-w-5xl mx-auto ">
					<div
						className='text-3xl	grid place-items-end text-white p-2 cursor-pointer  '
						onClick={() => {
							setModalIsOpen(false);
						}}
					>
						X
					</div>
					<div className='h-full '>{children}</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default ModalOverlay;