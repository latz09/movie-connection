const SearchBar = ({inputChangeHandler, title}) => {
	

	return (
		<div className='text-center w-full'>
			<input
				type='text'
				className='bg-gray-100 border-0 focus:ring-gray-400 ring-gray-200 ring-1 w-2/3 '
				value={title}
				onChange={inputChangeHandler}
			/>
		</div>
	);
};

export default SearchBar;
