import { useRouter } from 'next/router';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const BackButton = () => {
	let router = useRouter();
	return (
		<button
			className='text-5xl text-primary'
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
