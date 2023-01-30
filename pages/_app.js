import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
	const pageAnimateVariable = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 0.3,
				duration: 0.8,
			},
		},
		exit: { opacity: 0, transition: { duration: 0.3 } },
	};
	return (
		<div className='bg-dark text-light tracking-wider font-logo'>
			<Layout>
				<AnimatePresence mode='wait'>
					<motion.div
						key={router.route}
						variants={pageAnimateVariable}
						initial='hidden'
						animate='visible'
						exit='exit'
					>
						<Component {...pageProps} /> <Component {...pageProps} />{' '}
					</motion.div>
				</AnimatePresence>
			</Layout>
		</div>
	);
}

export default MyApp;
