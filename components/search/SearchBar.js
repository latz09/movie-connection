import { forwardRef } from 'react';

const SearchBar = ( props, ref ) => {
	return (
		<div className='text-center w-full'>
			<input
				type='text'
				placeholder='search any movie ...'
				className='bg-gray-900 border-0 focus:ring-gray-400 ring-neon-blue ring-1 w-full md:w-2/3 text-gray-200 font-medium tracking tracking-widest'
				ref={ref}
				onChange={() => {
					props.setSearchValue(ref.current.value);
				}}
			/>
		</div>
	); 
};

export default forwardRef(SearchBar);
 