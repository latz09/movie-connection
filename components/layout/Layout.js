import HeadingSearch from '../heading/HeadingSearch';
import Navbar from '../layout/Navbar'
const Layout = ({ children }) => {
	return (
		<>
			<div>
				<Navbar />

			</div>
			<div>
				<HeadingSearch />
			</div>
			<main>{children}</main>
		</>
	);
};

export default Layout;
