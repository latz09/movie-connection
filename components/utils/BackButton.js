import { useRouter } from 'next/router';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const BackButton = () => {
	let router = useRouter();
	return (
		<button
			className='text-2xl text-neon-blue opacity-70 hover:opacity-100'
			onClick={() => {
				router.back(); 
			}}
		>
			{' '}
			<AiOutlineArrowLeft />
		</button>
	);
};

export default BackButton;
