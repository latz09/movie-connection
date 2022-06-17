import Image from 'next/image'

const Poster = ({src, alt, width, height}) => {
    return ( <>
        <Image 
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    </> );
}
 
export default Poster;


// TypeError: Cannot read properties of undefined (reading 'release_dates')
//   22 |  const premiereReleaseData = releaseData.results.filter(
//   23 |          (x) => x.iso_3166_1 === 'US'
// > 24 |  )[0].release_dates[0];

//above error occured when searched random movie.
//need to have a fallback for the 'us' release date. not every movie will be released in US
// either just dont have the year in those if it isnt us
//that will be quick fix.  then can go back and display for non US releases

