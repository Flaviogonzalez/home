import { useRef, useEffect, useCallback, useState } from 'react';

function useFrames(frames: React.CSSProperties[], loop: boolean = false, delay: number = 0) {
  const ref = useRef<HTMLDivElement>(null);
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
      } else if (frameIndex.current === frames.length) {
        frameIndex.current = 0;
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

  return { ref, style };
}

export default useFrames;