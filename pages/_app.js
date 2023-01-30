import '../styles/globals.css';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<div className='bg-dark text-light tracking-wider font-logo'>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
}

export default MyApp;
