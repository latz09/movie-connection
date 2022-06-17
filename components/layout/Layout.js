import MainTitle from "../Hero";
import SearchBar from "../userSearch/SearchBar";
import MovieList from "../userSearch/MovieList";

const Layout = ({ children }) => {
	return (
		<div>
			<div><SearchBar /></div>
            <div>
                <MainTitle />
            </div>
            <div>
                <MovieList/>
            </div>
			<main>{children}</main>
		</div>
	);
};

export default Layout;
