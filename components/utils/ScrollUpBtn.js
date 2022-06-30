import { BsArrowUp } from 'react-icons/bs';

const ScrollUpBtn = ({ href }) => {
	return (
		<div className='p-2 font-extrabold bg-neon-blue text-neon-blue bg-opacity-40 rounded-full animate-pulse text-2xl'>
			<a href={href}>
				<BsArrowUp />
			</a>
		</div>
	);
};

export default ScrollUpBtn;
