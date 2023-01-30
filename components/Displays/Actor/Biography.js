import ScrollUpBtn from '../../utils/ScrollUpBtn';

const Biography = ({ actorBiography }) => {
	return (
		<div className='max-w-7xl mx-auto text-justify md:leading-8 text-base md:text-lg px-2  font-semibold md:tracking-wider overflow-scroll scrollbar-hide'>
			{actorBiography === '' ? (
				<p>No biography available</p>
			) : (
				<div className="bg-dark p-8 min-h-full">
					<p className="">{actorBiography}</p>
				</div>
			)}
			<div className='py-4 text-center'>close</div>
		</div>
	);
};

export default Biography;
