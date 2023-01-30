const DisplayHeading = ({ title, runtime }) => {
	return (
		<div className='max-w-6xl mx-auto w-full grid gap-2 py-4'>
			<h1 className='text-2xl md:text-4xl lg:text-6xl tracking-wider'>
				{title}
			</h1>
			<ul className='text-xl'>
				<li>{runtime} min</li>
			</ul>
		</div>
	);
};

export default DisplayHeading;
