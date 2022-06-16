import MovieDisplay from '../../components/Displays/MovieDisplay';
import { server } from '../../config';

const moviePage = ({detailsData, creditsData}) => {

	//same data from database
	//once the overview component is styles then switch this back to the data from props
	const jsonData = {"adult":false,"backdrop_path":"/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg","belongs_to_collection":{"id":10194,"name":"Toy Story Collection","poster_path":"/7G9915LfUQ2lVfwMEEhDsn3kT4B.jpg","backdrop_path":"/9FBwqcd9IRruEDUrTdcaafOMKUq.jpg"},"budget":30000000,"genres":[{"id":16,"name":"Animation"},{"id":12,"name":"Adventure"},{"id":10751,"name":"Family"},{"id":35,"name":"Comedy"}],"homepage":"http://toystory.disney.com/toy-story","id":862,"imdb_id":"tt0114709","original_language":"en","original_title":"Toy Story","overview":"Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.","popularity":227.943,"poster_path":"/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg","production_companies":[{"id":3,"logo_path":"/1TjvGVDMYsj6JBxOAkUHpPEwLf7.png","name":"Pixar","origin_country":"US"}],"production_countries":[{"iso_3166_1":"US","name":"United States of America"}],"release_date":"1995-10-30","revenue":373554033,"runtime":81,"spoken_languages":[{"english_name":"English","iso_639_1":"en","name":"English"}],"status":"Released","tagline":"","title":"Toy Story","video":false,"vote_average":8,"vote_count":15485}
	
	return (
		<div className="pt-12">
			<MovieDisplay detailsData={detailsData} creditsData={creditsData}/>
		</div>
	);
};


export async function getStaticProps({ params }) {
	const detailsURL = `${server}/movie/${params.movieId}?api_key=${process.env.API_KEY}&language=en-US`;
	const creditURL = `${server}/movie/${params.movieId}/credits?api_key=${process.env.API_KEY}&language=en-US`

	const detailsResponse = await fetch(detailsURL);
	const detailsData = await detailsResponse.json();

	const creditsResponse = await fetch(creditURL)
	const creditsData = await creditsResponse.json()

	return {
		props: {detailsData, creditsData},
		revalidate: 10,
	}	
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}

export default moviePage;
