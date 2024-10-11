import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';

import fullHdPlaceholder from '@/assets/images/placeholder/1920x1080.png';

import { useLayoutStore } from '@/store';

import { getSlider } from '@/api/slides';

const HeroSlider = () => {
  const { isFixed } = useLayoutStore();
  const { data, isLoading } = useSWR('heroSlider', getSlider);

  return (
    <section className={`main_slider_area ${isFixed && 'marginFixed'}`}>
      <div className="">
        {isLoading ? (
          <div>
            <img
              alt="Placeholder slide"
              src={fullHdPlaceholder}
              style={{ width: '100%', height: '707px' }}
            />
          </div>
        ) : (
          <Swiper
            spaceBetween={30}
            effect="fade"
            loop={true}
            autoplay={{
              delay: 1500,
            }}
            modules={[EffectFade, Autoplay]}
            className="slider_inner">
            {data?.map((slide) => (
              <SwiperSlide key={slide?.slug}>
                <div
                  style={{ position: 'relative', height: '100%' }}
                  className="">
                  <div className="hero_slider_image_container">
                    <img src={slide?.image} alt={slide?.title} />
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
        )}
      </div>
    </section>
  );
};

export default HeroSlider;
