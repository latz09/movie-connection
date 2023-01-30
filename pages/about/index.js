import Link from 'next/link'
import Image from 'next/image';
import TMDBLOGO from '../../public/images/TMDBlogo.svg';

const aboutPage = () => {
	return (
		<div className='h-screen font-description flex flex-col place-items-center justify-center mx-4 text-center' >
			<Image src={TMDBLOGO} alt={'The Movie Database Logo'} />
			<p className='py-5'>
				This product uses the TMDB API but is not endorsed or certified by TMDB.
			</p>
			<h1 className='text-2xl text-neon-blue tracking-widest font-bold hover:opacity-75 cursor-pointer mt-10'>
				<Link href={'/'}>HOME</Link>
			</h1>
		</div>
	);
};

export default aboutPage;
