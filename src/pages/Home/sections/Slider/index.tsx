import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';

import { useLayoutStore } from '@/store';

import { getSlideList } from '@/api/slides';

const sliderSettings = {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  autoplay: {
    delay: 1500,
  },
  modules: [EffectFade, Autoplay],
  className: 'slider_inner',
};

const HeroSlider = () => {
  const { isFixed } = useLayoutStore();
  const { data, isLoading } = useSWR('heroSlider', getSlideList);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={`main_slider_area ${isFixed && 'marginFixed'}`}>
      <div className="">
        <Swiper {...sliderSettings}>
          {data?.map((slide) => (
            <SwiperSlide key={slide?.slug}>
              <div style={{ position: 'relative', height: '100%' }}>
                <div className="hero_slider_image_container">
                  <img
                    src={slide?.image}
                    alt={slide?.title}
                    loading="lazy" // Lazy loading for better performance
                  />
                </div>
                <div
                  style={{ position: 'relative', zIndex: '10' }}
                  className="container">
                  <div className="slider_text">
                    <h3 className="fadeInLeft animated">{slide?.title}</h3>
                    <h4 className="fadeInLeft animated">
                      {slide?.description}
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSlider;
