'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
  onExpandComplete?: () => void;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
  onExpandComplete,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const hasNavigated = useRef(false);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
    hasNavigated.current = false;
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        hasNavigated.current = false;
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0015; // Increased speed slightly
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
          if (onExpandComplete && !hasNavigated.current) {
            hasNavigated.current = true;
            onExpandComplete();
          }
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        hasNavigated.current = false;
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.012 : 0.008; 
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
          if (onExpandComplete && !hasNavigated.current) {
            hasNavigated.current = true;
            onExpandComplete();
          }
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener('scroll', handleScroll as EventListener);
    window.addEventListener(
      'touchstart',
      handleTouchStart as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener(
      'touchmove',
      handleTouchMove as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener('touchend', handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener(
        'wheel',
        handleWheel as unknown as EventListener
      );
      window.removeEventListener('scroll', handleScroll as EventListener);
      window.removeEventListener(
        'touchstart',
        handleTouchStart as unknown as EventListener
      );
      window.removeEventListener(
        'touchmove',
        handleTouchMove as unknown as EventListener
      );
      window.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY, onExpandComplete]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden bg-[var(--color-paramo-dark)]'
    >
      <section className='relative flex flex-col items-center justify-start min-h-[100dvh]'>
        <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>
          <motion.div
            className='absolute inset-0 z-0 h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <div
              className='absolute inset-0 bg-cover bg-center'
              style={{
                backgroundImage: `url('${bgImageSrc}')`,
              }}
            />
            <div className='absolute inset-0 bg-white/20 backdrop-blur-[2px]' />
          </motion.div>

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10 pointer-events-none'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>
              
              {/* Top Text (Title) */}
              <motion.div
                className='absolute top-[10%] w-full flex items-center justify-center gap-4 z-20 px-4 text-center'
                animate={{ opacity: 1 - scrollProgress * 3, y: -scrollProgress * 50 }}
              >
                <h2 className='text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-[var(--color-paramo-bone)] drop-shadow-lg tracking-tight'>
                  {firstWord} {restOfTitle}
                </h2>
              </motion.div>

              {/* Media Container */}
              <div
                className='absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl overflow-hidden'
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '100vw',
                  maxHeight: '100vh',
                  boxShadow: '0px 20px 60px rgba(0, 0, 0, 0.2)',
                }}
              >
                {mediaType === 'image' && (
                  <div className='relative w-full h-full'>
                    <div
                      className='w-full h-full bg-cover bg-center transition-transform duration-[20s] ease-linear hover:scale-105'
                      style={{ backgroundImage: `url('${mediaSrc}')` }}
                    />
                    <motion.div
                      className='absolute inset-0 bg-black/10'
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: Math.max(0, 0.3 - scrollProgress) }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}
              </div>

              {/* Bottom Text (Date & Subtitle) */}
              <motion.div 
                className='absolute bottom-[10%] flex flex-col items-center text-center z-20 w-full px-6'
                animate={{ opacity: 1 - scrollProgress * 3, y: scrollProgress * 50 }}
              >
                {date && (
                  <p className='font-serif text-2xl md:text-4xl text-[var(--color-paramo-green)] italic max-w-3xl mx-auto leading-relaxed drop-shadow-sm mb-4 font-medium'>
                    {date}
                  </p>
                )}
                {scrollToExpand && (
                  <p className='font-sans text-xs md:text-sm text-[var(--color-paramo-blue)]/80 max-w-md mx-auto tracking-[0.3em] uppercase font-bold animate-pulse'>
                    {scrollToExpand}
                  </p>
                )}
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
