import { useRef, useEffect, useCallback, useState } from 'react';
import useInViewPort from './use-in-viewport';

function useInterceptionFrames(frames: React.CSSProperties[], loop: boolean = false, delay: number = 0,opciones: IntersectionObserverInit = {threshold: 0}) {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useInViewPort(ref, opciones)
  const [style, setStyle] = useState(frames[0])
  const frameIndex = useRef(0);
  const isTransitioning = useRef(false);

  const handleTransitionEnd = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    setTimeout(() => {
      frameIndex.current += 1;
      if (frameIndex.current < frames.length) {
        setStyle(frames[frameIndex.current]);
      } else if (loop) {
        frameIndex.current = 0;
        setStyle(frames[0]);
      }
      isTransitioning.current = false;
    }, delay);
  }, [frames, loop]);

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('transitionend', handleTransitionEnd);
      return () => {
        currentRef.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, [handleTransitionEnd]);

  return { ref, isIntersecting, style };
}

export default useInterceptionFrames;