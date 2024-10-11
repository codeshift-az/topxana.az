import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      style={{
        visibility: isVisible ? 'visible' : 'hidden',
        opacity: isVisible ? 1 : 0,
        transition: '0.5s all',
      }}
      id="preloader">
      <div id="preloader_1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Preloader;
