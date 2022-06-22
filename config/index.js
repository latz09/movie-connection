const dbKey = process.env.customKey

export const server = 'https://api.themoviedb.org/3'
export const imageServer = 'https://image.tmdb.org/t/p'



//trending Server for the WEEK
export const trendingServer_Week = `${server}/trending/movie/week?api_key=${dbKey}`

//trending Server for the DAY
export const trendingServer_Day = `${server}/trending/movie/day?api_key=${dbKey}`

//Top Rated Server
export const topRatedServer = `${server}/movie/top_rated?api_key=${dbKey}`

