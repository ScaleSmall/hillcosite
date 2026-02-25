import React, { useState, useRef } from 'react';

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
  const [sliderPos, setSliderPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
    updatePosition(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    updatePosition(e.clientX);
  };

  const onMouseUp = () => setDragging(false);

  const onTouchStart = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className={`relative select-none rounded-xl overflow-hidden cursor-col-resize ${className}`}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
    >
      <img
        src={afterImage}
        alt={`After: ${alt}`}
        className="block w-full h-auto"
        draggable={false}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeImage}
          alt={`Before: ${alt}`}
          className="block h-auto"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%', maxWidth: 'none' }}
          draggable={false}
        />
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 pointer-events-none"
        style={{ left: `calc(${sliderPos}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 10L2 7v6l4-3zm8 0l4 3V7l-4 3z" fill="#0066B2"/>
            <line x1="10" y1="3" x2="10" y2="17" stroke="#0066B2" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1.5 rounded-lg text-sm font-semibold pointer-events-none z-10">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-brand-azureDark/90 text-white px-3 py-1.5 rounded-lg text-sm font-semibold pointer-events-none z-10">
        After
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
