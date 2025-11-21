import React from 'react';
import LazyImage from './LazyImage';

interface ImageWithGeoProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  srcSet?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  location?: {
    name: string;
    latitude: number;
    longitude: number;
    region: string;
  };
}

const ImageWithGeo: React.FC<ImageWithGeoProps> = ({
  src,
  alt,
  width,
  height,
  className,
  srcSet,
  sizes,
  loading = 'lazy',
  priority = false,
  location
}) => {
  const defaultLocation = {
    name: 'Austin, TX',
    latitude: 30.2672,
    longitude: -97.7431,
    region: 'Texas'
  };

  const geoData = location || defaultLocation;

  return (
    <>
      <LazyImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        srcSet={srcSet}
        sizes={sizes}
        loading={loading}
        priority={priority}
      />
    </>
  );
};

export default ImageWithGeo;