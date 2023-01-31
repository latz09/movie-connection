import HeadingSearch from "../search/HeadingSearch";

const SearchContent = ({setModalIsOpen}) => {
	return (
		<div className=" h-full grid  ">
			<HeadingSearch setModalIsOpen={setModalIsOpen}/>
		</div>
	);
};

export default SearchContent;
