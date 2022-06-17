import '../styles/globals.css';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<div className='bg-black text-gray-100 font-light tracking-wider'>
			{/* <Layout> */}
				<Component {...pageProps} />
			{/* </Layout> */}
		</div>
	);
}

export default MyApp;
