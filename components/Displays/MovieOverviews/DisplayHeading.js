const DisplayHeading = ({ title, runtime }) => {
	return (
		<div className='border max-w-6xl mx-auto grid gap-2'>
			<h1 className='text-6xl tracking-wider'>
				{title}
			</h1>
			<ul className='text-xl'>
				<li>{runtime} min</li>
			</ul>
		</div>
	);
};

export default DisplayHeading;
