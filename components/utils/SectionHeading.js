import TrendingFilter from "../trendingMovies/TrendingFilter";

const SectionHeading = ({ title }) => {
	return (
		<div className="text-center text-3xl text-neon-blue font-sans font-semibold tracking-wider">
			{' '}
			<h1>{title}</h1>{' '}
		</div>
	);
};

export default SectionHeading;
