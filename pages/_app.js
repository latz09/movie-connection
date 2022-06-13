import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<div className="bg-gray-100 text-gray-800 font-light tracking-wider">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
