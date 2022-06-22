import YouTube from 'react-youtube';

export const YouTubeDisplay = ({videoId}) => {
	const baseOpts = {
		height: '300',
		width: '500',
	};
	return <YouTube videoId={videoId} opts={baseOpts} />;
};


export const SmallYouTubeDisplay = () => {
	const smallOpts = {
		height: '300',
		width: '300',
	};
	return <YouTube videoId='CxwTLktovTU' opts={smallOpts} />;
};