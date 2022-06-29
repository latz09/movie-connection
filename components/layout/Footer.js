import Link from 'next/link';

import Logo from './Logo';

const Footer = () => {
	return (
		<div className='bg-gray-900  bg-opacity-50 p-14 sticky flex justify-center  md:flex-none md:justify-start 2xl:justify-center'>
			<div className='md:grid grid-cols-2 '>
				<Logo />

				<div className='flex justify-center pt-2 md:grid 2xl:flex items-center font-description gap-3'>
					<Link href={'/'}>
						<span className='cursor-pointer'>home</span>
					</Link>
					<Link href={'/about'}>
						<span className='cursor-pointer'>about</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
