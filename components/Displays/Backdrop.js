import Image from 'next/image';

const Backdrop = ({src, alt, layout, width, height}) => {
	return <Image src={src} alt={alt} width={width} height={height} layout={layout} />;
};

export default Backdrop;
