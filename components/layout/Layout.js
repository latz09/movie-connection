import Navbar from '../layout/Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<>
			<div>
				<Navbar />
			</div>	
			<main>{children}</main>
			<div className="pt-32">
				<Footer />
			</div>
		</>
	);
};

export default Layout;
