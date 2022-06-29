import '../styles/globals.css';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<div className='bg-[#0d0d0d] min-h-screen text-gray-100 font-light tracking-wider font-logo'>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
}

export default MyApp;
