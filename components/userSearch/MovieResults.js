import Image from 'next/image';

const MovieResults = ({ title, poster }) => {
	return (
		<div className="">
			<div className='p-3 shadow-md hover:shadow-xl'>
				<div>
					<Image
						src={poster}
						alt={`${title} movie poster`}
						width={250}
						height={320}
					/>
				</div>
				<div className='text-center'>{title}</div>
			</div>
		</div>
	);
};

export default MovieResults;
