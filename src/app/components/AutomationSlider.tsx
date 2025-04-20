import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

interface SlideItem {
  id: number;
  imageSrc: string;
  title: string;
}

interface AutomationSliderProps {
  slides: SlideItem[];
  autoSlideInterval?: number;
}

const AutomationSlider = ({
  slides,
  autoSlideInterval = 3000,
}: AutomationSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(slides.length - 1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]); // Dependency: slides.length

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]); // Dependency: slides.length

  const goToSlide = useCallback((slideIndex: number) => {
    setCurrentIndex(slideIndex);
  }, []);

  const resetAutoSlideTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    if (isAutoPlaying) {
      timerRef.current = setInterval(goToNext, autoSlideInterval);
    }
  }, [isAutoPlaying, autoSlideInterval, goToNext]); // Dependencies are stable now

  useEffect(() => {
    resetAutoSlideTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetAutoSlideTimer]);

  const getOrderedSlides = () => {
    return [...Array(slides.length)].map((_, i) => {
      const slideIndex = (currentIndex - i + slides.length) % slides.length;
      return slides[slideIndex];
    });
  };

  const touchStartX = useRef<number>(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  const orderedSlides = getOrderedSlides();
  const progressWidth = 100 / slides.length;
  const progressPosition = (slides.length - 1 - currentIndex) * progressWidth;

  return (
    <div
      className="relative w-full py-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      ref={sliderRef}
    >
      <div className="flex justify-center relative">
        <div className="flex gap-4 overflow-x-hidden transition-transform duration-500 ease-in-out px-4 sm:px-2 xs:px-1">
          {orderedSlides.map((slide, index) => {
            const isActive = index === 0;

            return (
              <div
                key={`${slide.id}-${index}`}
                className="transition-all duration-500 flex-shrink-0 flex flex-col items-start cursor-pointer"
                style={{
                  opacity: isActive ? 1 : 0.4,
                  transform: `scale(${isActive ? 1 : 0.9})`,
                }}
                onClick={() =>
                  !isActive &&
                  goToSlide((currentIndex - index + slides.length) % slides.length)
                }
              >
                <div className="relative w-[clamp(160px,30vw,270px)] h-[clamp(120px,24vw,219px)] overflow-hidden rounded-t-[160px]">
                  <Image
                    src={slide.imageSrc}
                    alt={slide.title}
                    fill
                    className="object-cover transition-opacity duration-500"
                    priority={index === 0}
                    onError={(e) => {
                      console.error(`Failed to load image: ${slide.imageSrc}`);
                      e.currentTarget.src = '/images/placeholder.png';
                    }}
                  />
                </div>
                <div className="mt-2 text-left w-full px-1">
                  <h3 className="text-[26px] text-[#334047] font-semibold leading-snug">
                    {slide.title.split(' ').map((word, i) =>
                      i === 0 ? (
                        <span key={i}>
                          {word}
                          <br />
                        </span>
                      ) : (
                        <span key={i}> {word}</span>
                      )
                    )}
                  </h3>
                  <div className="w-[33px] border-[1.5px] border-[#334047] my-2"></div>
                  <div className="flex items-center mt-1">
                    <span className="text-[18px] text-[#45565F] font-medium">
                      More for this
                    </span>
                    <div className="ml-2 w-6 h-6 flex items-center justify-center rounded-sm border-2 border-amber-400 text-[#F7A51E]">
                      <FaArrowUpRightFromSquare size={16} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        className="absolute left-4 sm:left-2 top-1/2 -translate-y-1/2 bg-yellow-400 w-8 h-8 sm:w-7 sm:h-7 xs:w-6 xs:h-6 flex items-center justify-center rounded-sm z-10"
        aria-label="Previous slide"
      >
        <MdChevronLeft size={20} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        className="absolute right-4 sm:right-2 top-1/2 -translate-y-1/2 bg-yellow-400 w-8 h-8 sm:w-7 sm:h-7 xs:w-6 xs:h-6 flex items-center justify-center rounded-sm z-10"
        aria-label="Next slide"
      >
        <MdChevronRight size={20} />
      </button>

      {/* Progress indicator */}
      <div className="relative flex justify-center mt-6 px-4">
        <div className="h-1 w-full max-w-2xl sm:max-w-md xs:max-w-xs">
          <div
            className="h-1 bg-yellow-400 rounded-full transition-transform duration-500 ease-in-out"
            style={{
              width: `${progressWidth}%`,
              transform: `translateX(${progressPosition}%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AutomationSlider;