import React from 'react';
import ReactCompareImage from 'react-compare-image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
  className?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  alt,
  className = ''
}) => {
  return (
    <div className={`relative rounded-xl overflow-hidden ${className}`}>
      <ReactCompareImage
        leftImage={beforeImage}
        rightImage={afterImage}
        leftImageAlt={`Before: ${alt}`}
        rightImageAlt={`After: ${alt}`}
        sliderLineWidth={4}
        sliderLineColor="#0066B2"
        handleSize={40}
        hover={true}
      />

      {/* Before Label */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1.5 rounded-lg text-sm font-semibold pointer-events-none z-10">
        Before
      </div>

      {/* After Label */}
      <div className="absolute top-4 right-4 bg-brand-azureDark/90 text-white px-3 py-1.5 rounded-lg text-sm font-semibold pointer-events-none z-10">
        After
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
