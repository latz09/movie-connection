const dbKey = process.env.customKey;

export const formatUrl = (actorId, query, server) => {
	let url;

	query === ''
		? (url = `${server}/person/${actorId}?api_key=${dbKey}`)
		: (url = `${server}/person/${actorId}/${query}?api_key=${dbKey}`);

	return url;
};