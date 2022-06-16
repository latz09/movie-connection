import Image from 'next/image';
import { imageServer } from '../../config';

const MovieDisplay = ({ detailsData, creditsData }) => {
	const topThreeCast = creditsData.cast.slice(0, 3).map(x => x.name)
	

	return (
		<div className='w-3/4 mx-auto bg-gray-900 rounded shadow shadow-gray-500'>
			<h1 className='text-center text-3xl text-gray-200'>{detailsData.title}</h1>
			<div className='flex  p-4'>
				<Image
					src={`${imageServer}/w500/${detailsData.poster_path}`}
					alt={`${detailsData.title} movie poster`}
					width={230}
					height={300}
				/>

				<div>
                {topThreeCast.map(person => (
                    <ul key={person}>
                        <li>{person}</li>

                    </ul>
                ))}
                   
                   
                </div>
				<div>{/* add recommendation */}</div>
				<div>{/* add to interested */}</div>
			</div>
		</div>
        // <div><h1>{detailsData.title}</h1></div>
	);
};

export default MovieDisplay;
