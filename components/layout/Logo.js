import Link from 'next/link';
import { MdOutlineMovieCreation } from 'react-icons/md';


const Logo = () => {
	return (
		<div className=' text-neon-blue font-logo tracking-widest cursor-pointer'>
			<Link href={'/'}>
				<div className='flex items-center space-x-3 '>
					<MdOutlineMovieCreation className='text-5xl opacity-60' />
					<h1 className='text-xl tracking-widest hover:opacity-80 transition duration-300'>Movie Connection</h1>
				</div>
			</Link>
			
		</div>
	);
};

export default Logo;
