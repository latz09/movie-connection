import Image from 'next/image'


const HeroImage = ({src, alt, height, width}) => {
    return ( 
        <Image src={src} alt={alt} height={height} width={width} />
     );
}


export default HeroImage
