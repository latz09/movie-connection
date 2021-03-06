import { AiFillYoutube } from 'react-icons/ai';

const VideoButton = () => {
	return (
		<>
			<button className='btn-link flex space-x-4 items-center'>
				<span>Watch Clips</span>
				<span className='text-2xl text-red-500'>
					<AiFillYoutube/>
				</span>
			</button>
		</> 
	);
};

export default VideoButton;
