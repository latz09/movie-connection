import CastLink from "../../utils/CastLink";
import VideoLink from "../../Videos/VideoButton";

const MovieDescriptionLinks = ({trailerId, movieId}) => {
	
	return (
		<div className='md:text-xl pb-3 flex space-x-4 items-center'>
			<VideoLink trailerId={trailerId} />
			<CastLink movieId={movieId}/>
		</div>
	); 
};

export default MovieDescriptionLinks;
