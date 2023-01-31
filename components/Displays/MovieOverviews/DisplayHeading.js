import { motion } from 'framer-motion';
const DisplayHeading = ({ title, runtime }) => {
	return (
		<motion.div
			initial={{ opacity: .5, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1 }}
			className='px-2 max-w-7xl lg:mx-auto w-full grid gap-2 py-4'
		>
			<h1 className='text-2xl md:text-4xl lg:text-6xl tracking-wider'>
				{title}
			</h1>
			<ul className='text-xl'>
				<li>{runtime} min</li>
			</ul>
		</motion.div>
	);
};

export default DisplayHeading;
