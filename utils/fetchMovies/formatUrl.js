const dbKey = process.env.customKey;

export const formatUrl = (movieId, query, server) => {
	let url;

	query === ''
		? (url = `${server}/movie/${movieId}?api_key=${dbKey}`)
		: (url = `${server}/movie/${movieId}/${query}?api_key=${dbKey}`);

	return url;
};