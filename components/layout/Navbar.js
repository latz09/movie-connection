import HeroOverlay, { ModalContainer } from '../Hero/HeroOverlay';
import Logo from './Logo';


const Navbar = () => {
	return (
		<div className=' py-8 max-w-7xl mx-auto flex justify-between items-center' 
	
		>
			<Logo />
			<ModalContainer />
		</div>
	);
};

export default Navbar;
