export const filterVideos = (videos) => {
	let neededVideo = videos.filter(
		(x) => x.site === 'YouTube' && x.official === true
	);

    return neededVideo
};
 