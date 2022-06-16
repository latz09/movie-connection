/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains: ['m.media-amazon.com', 'image.tmdb.org']
  },
  env: {
    customKey: 'a2f0798c92ead2ff4fa893d6a9430867',
  }
}

module.exports = nextConfig
