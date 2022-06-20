const DisplayHeading = ({title, rating, runtime}) => {
	return (
		<div className='grid gap-3 '>
			<div className='space-y-4'>
				<h1 className='text-5xl text-neon-blue'>{title}</h1>
				<ul className='flex space-x-4'>
					<li>{`1995`}</li>
					<li>{rating}</li>
					<li>{runtime} min</li>
				</ul>
			</div>
		</div>
	);
};

export default DisplayHeading;
