import { MutableRefObject, useEffect, useRef, useState } from 'react';

// Добавляем generic T, который будет типизировать элемент ref
type UseInView<T extends HTMLElement> = [
  MutableRefObject<null | T>,
  boolean,
  boolean,
];

const useInView = <T extends HTMLElement>(): UseInView<T> => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const [isViewed, setIsViewed] = useState<boolean>(false);
  // Используем generic T для типизации ref
  const elementRef = useRef<null | T>(null);

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
