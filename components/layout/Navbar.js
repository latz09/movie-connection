import { MdOutlineMovieCreation } from 'react-icons/md';

const Navbar = () => {
	return (
		<div className='p-2 border-b mb-6'>
			<div className="flex items-center space-x-3">
			<MdOutlineMovieCreation className='text-5xl  text-cyan-800 opacity-90' />
			<h1 className='text-lg tracking-widest'>Movie Connection</h1>
			</div>
		</div>
	);
};

export default Navbar;
