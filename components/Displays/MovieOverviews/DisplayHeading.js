const DisplayHeading = ({ title, runtime }) => {
	return (
		<div className='grid gap-3'>
			<h1 className='text-3xl sm:text-5xl md:text-6xl text-neon-blue'>
				{title}
			</h1>
			<ul className='flex space-x-4'>
				<li>{runtime} min</li>
			</ul>
		</div>
	);
};

export default DisplayHeading;
