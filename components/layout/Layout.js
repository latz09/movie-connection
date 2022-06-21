import Navbar from '../layout/Navbar';

import HeroBackground from '../Hero/HeroBackground';

const Layout = ({ children }) => {
	return (
		<>
			<div>
				<Navbar />
			</div>
		

			<main>{children}</main>
		</>
	);
};

export default Layout;
