'use client';

import { useEffect, useRef, useState } from 'react';

const useInView = () => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const [isViewed, setIsViewed] = useState<boolean>(false);
  const elementRef = useRef<null | HTMLElement>(null);

  const checkIsInView = () => {
    if (elementRef.current) {
      const elementRect = elementRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const inView =
        (elementRect.top >= 0 && elementRect.top <= windowHeight) ||
        (elementRect.bottom >= 0 && elementRect.bottom <= windowHeight);
      setIsInView(() => inView);
      if (inView && !isViewed) {
        setIsViewed(() => true);
      }
    }
  };

  useEffect(() => {
    checkIsInView();
    document.addEventListener('scroll', checkIsInView);
    window.addEventListener('resize', checkIsInView);
    return () => {
      document.removeEventListener('scroll', checkIsInView);
      window.removeEventListener('resize', checkIsInView);
    };
  }, []);

  return [elementRef, isViewed, isInView];
};

export default useInView;
