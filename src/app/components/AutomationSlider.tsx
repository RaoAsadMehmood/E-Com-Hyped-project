import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

interface SlideItem {
  id: number;
  imageSrc: string;
  title: string;
  href: string; // Added href property
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
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex === 0 ? slides.length - 1 : prevIndex - 1;
      return nextIndex;
    });
  }, [slides.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const prevIndexValue = prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
      return prevIndexValue;
    });
  }, [slides.length]);

  const goToSlide = useCallback(
    (slideIndex: number) => {
      setCurrentIndex(slideIndex);
      setProgress((slideIndex + 1) * (100 / slides.length));
    },
    [slides.length]
  );

  const resetAutoSlideTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        goToNext();
        setProgress((prev) => (prev + 100 / slides.length) % 100);
      }, autoSlideInterval);
    }
  }, [isAutoPlaying, autoSlideInterval, goToNext, slides.length]);

  useEffect(() => {
    resetAutoSlideTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetAutoSlideTimer]);

  const getOrderedSlides = () => {
    return [...Array(slides.length)].map((_, i) => {
      // Calculate the correct index for the ordered slide based on currentIndex
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

  return (
    <div
      className="relative w-full py-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      ref={sliderRef}
    >
      {/* Slide Items */}
      <div className="flex justify-center relative">
        <div className="flex gap-4 overflow-x-hidden transition-transform duration-500 ease-in-out px-4 sm:px-2 xs:px-1">
          {orderedSlides.map((slide, index) => {
            const isActive = index === 0;

            return (
              <Link key={`${slide.id}-${index}`} href={slide.href} passHref> {/* Wrapped the entire slide with Link */}
                <div
                  className="transition-all duration-500 flex-shrink-0 flex flex-col items-start cursor-pointer"
                  style={{
                    opacity: isActive ? 1 : 0.4,
                    transform: `scale(${isActive ? 1 : 0.9})`,
                  }}
                  // Click handler for non-active slides to navigate
                  onClick={(e) => {
                    // Prevent default Link behavior if not active, and handle navigation manually
                    if (!isActive) {
                      e.preventDefault(); // Stop Link from navigating immediately
                      goToSlide((currentIndex - index + slides.length) % slides.length);
                      // You might want to programmatically navigate after animation here if needed,
                      // or simply let the Link handle it if clicked while active.
                    }
                    // If isActive, the Link will handle navigation directly on click.
                  }}
                >
                  <div className="relative w-[clamp(140px,60vw,270px)] h-[clamp(100px,45vw,219px)] sm:w-[clamp(160px,30vw,270px)]
                    sm:h-[clamp(120px,24vw,219px)] overflow-hidden rounded-t-[100px] sm:rounded-t-[160px]">
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
                    <h3 className="text-[20px] sm:text-[26px] text-[#334047] font-semibold leading-snug">
                      {/* Removed split and map for simplicity; assume titles are single line or managed by CSS */}
                      {slide.title}
                    </h3>
                    <div className="w-[28px] sm:w-[33px] border-[1.5px] border-[#334047] my-2"></div>
                    <div className="flex items-center mt-1">
                      <span className="text-[16px] sm:text-[18px] text-[#45565F] font-medium">
                        More for this
                      </span>
                      <div className="ml-2 w-6 h-6 flex items-center justify-center rounded-sm border-2 border-amber-400 text-[#F7A51E]">
                        <FaArrowUpRightFromSquare size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Progress Bar + Arrows */}
      <div className="relative flex items-center justify-center mt-8 px-4 sm:px-6 gap-2 sm:gap-4 max-w-xl mx-auto">
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToPrevious();
            setProgress(0);
          }}
          className="bg-[#F7A51E] w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded text-white text-base sm:text-lg font-bold"
          aria-label="Previous Slide"
        >
          ←
        </button>

        <div className="flex-1 h-1 rounded-full bg-gray-300 relative overflow-hidden">
          <div
            className="h-full bg-[#F7A51E] transition-all duration-500 ease-in-out"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
            setProgress(0);
          }}
          className="bg-[#F7A51E] w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded text-white text-base sm:text-lg font-bold"
          aria-label="Next Slide"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default AutomationSlider;
