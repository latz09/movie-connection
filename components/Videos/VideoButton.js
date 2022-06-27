import VideoButton from '../utils/VideoLink';
const VideoLink = ({ trailerId }) => {
	return (
		<>
			<a
				href={`https://www.youtube.com/watch?v=${trailerId}`}
				target='_blank'
				rel='noreferrer'
			>
				<VideoButton />
			</a>
		</>
	);
};

export default VideoLink;
