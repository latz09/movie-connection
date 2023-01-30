const TrendingFilter = ({ setDay, setWeek, toggle }) => {
	return (
		<div className='flex space-x-8 justify-center text-xl '>
			<button
				className={`${toggle === 'day' ? 'btn-filter focused' : 'btn-filter'} `}
				onClick={setDay}
			>
				Today
			</button>
			<button
				className={`${
					toggle === 'week' ? 'btn-filter focused' : 'btn-filter '
				} `}
				onClick={setWeek}
			>
				This Week
			</button>
		</div>
	);
};

export default TrendingFilter;
 