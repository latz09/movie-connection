import { forwardRef } from 'react';

const SearchBar = (props, ref) => {
	return (
		<div className='text-center w-full'>
			<input
				type='text'
				placeholder='search any movie ...'
				className='search-bar '
				ref={ref}
				onChange={() => {
					props.setSearchValue(ref.current.value);
				}}
			/>
		</div> 
	);
};

export default forwardRef(SearchBar);
