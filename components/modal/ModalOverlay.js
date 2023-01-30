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
				className='fixed top-0 left-0  w-full h-full  z-10 bg-dark/60 backdrop-blur '
			>
				<div className=" flex flex-col  ">
					<div
						className='text-3xl	grid place-items-end  cursor-pointer max-w-4xl w-full py-4 mx-auto '
						onClick={() => {
							setModalIsOpen(false);
						}}
					>
						X
					</div>
					<div className=' '>{children}</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default ModalOverlay;