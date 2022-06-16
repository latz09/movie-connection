import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<div className="bg-black text-gray-100 font-light tracking-wider h-screen">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
