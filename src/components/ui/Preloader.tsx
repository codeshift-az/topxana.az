import { useLayoutStore } from '@/store';

const Preloader = () => {
  const { isLoading } = useLayoutStore();

  return (
    <div
      style={{
        visibility: isLoading ? 'visible' : 'hidden',
        opacity: isLoading ? 1 : 0,
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
