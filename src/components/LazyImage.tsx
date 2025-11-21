import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  placeholder?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  srcSet?: string;
  priority?: boolean;
  formats?: {
    avif?: string;
    webp?: string;
  };
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmNWY5Ii8+PC9zdmc+',
  loading = 'lazy',
  sizes,
  srcSet,
  priority = false,
  formats
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading === 'eager' || priority || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: priority ? '200px' : '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [loading, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  const placeholderSrc = placeholder;

  const commonStyles = {
    aspectRatio: width && height ? `${width}/${height}` : undefined
  };

  const imageElement = (
    <img
      src={hasError ? placeholderSrc : src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      srcSet={srcSet}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-70'
      } ${className}`}
      onLoad={handleLoad}
      onError={handleError}
      loading={loading}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      style={commonStyles}
    />
  );

  return (
    <>
      {!isInView && (
        <div
          ref={imgRef}
          className={`loading-skeleton ${className}`}
          style={{
            width: typeof width === 'number' ? `${width}px` : width || '100%',
            height: typeof height === 'number' ? `${height}px` : height || 'auto',
            aspectRatio: width && height ? `${width}/${height}` : undefined,
            minHeight: '64px'
          }}
          aria-label="Loading image"
        />
      )}
      {isInView && (
        formats && (formats.avif || formats.webp) ? (
          <picture>
            {formats.avif && (
              <source
                type="image/avif"
                srcSet={formats.avif}
                sizes={sizes}
              />
            )}
            {formats.webp && (
              <source
                type="image/webp"
                srcSet={formats.webp}
                sizes={sizes}
              />
            )}
            {imageElement}
          </picture>
        ) : (
          imageElement
        )
      )}
    </>
  );
};

export default LazyImage;
