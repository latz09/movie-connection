import ScrollUpBtn from '../../utils/ScrollUpBtn';

const Biography = ({ actorBiography }) => {

	return (
		<div className='max-w-5xl mx-auto text-justify leading-8 text-lg px-2  font-semibold tracking-wider'>
			{actorBiography === '' ? (
				<p>No biography available</p>
			) : (
				<p>{actorBiography}</p>
			)}
		<div className="py-4 text-center">close</div>
		</div>
	);
};

export default Biography;
