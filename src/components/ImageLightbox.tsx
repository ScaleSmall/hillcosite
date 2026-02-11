import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import BeforeAfterSlider from './BeforeAfterSlider';

export interface LightboxImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  isBeforeAfter?: boolean;
  beforeImage?: string;
  afterImage?: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  open: boolean;
  currentIndex: number;
  onClose: () => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  open,
  currentIndex,
  onClose
}) => {
  const slides = images.map((img) => {
    if (img.isBeforeAfter && img.beforeImage && img.afterImage) {
      return {
        type: 'custom' as const,
        render: () => (
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="max-w-5xl w-full">
              <BeforeAfterSlider
                beforeImage={img.beforeImage}
                afterImage={img.afterImage}
                alt={img.alt}
                className="w-full"
              />
              {img.title && (
                <div className="text-white text-center mt-4">
                  <h3 className="text-xl font-semibold mb-2">{img.title}</h3>
                  {img.description && (
                    <p className="text-gray-300 text-sm">{img.description}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )
      };
    }

    return {
      src: img.src,
      alt: img.alt,
      title: img.title,
      description: img.description
    };
  });

  return (
    <Lightbox
      open={open}
      close={onClose}
      index={currentIndex}
      slides={slides}
      carousel={{
        finite: images.length <= 1
      }}
      controller={{
        closeOnBackdropClick: true
      }}
    />
  );
};

export default ImageLightbox;
