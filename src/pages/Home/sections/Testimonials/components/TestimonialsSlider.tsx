import { useCallback, useMemo, useRef } from 'react';

import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

const TestimonialsSlider = () => {
  const sliderRef = useRef<null | SwiperRef>(null);
  const { t } = useTranslation('pages', {
    keyPrefix: 'home.testimonials',
  });

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  // Memoized testimonials data to prevent unnecessary re-renders
  const testimonialsSlides = useMemo(
    () => [
      {
        id: 1,
        text: t('testimonial-1-text'),
        name: t('testimonial-1-name'),
        position: t('testimonial-1-position'),
      },
      {
        id: 2,
        text: t('testimonial-2-text'),
        name: t('testimonial-2-name'),
        position: t('testimonial-2-position'),
      },
      {
        id: 3,
        text: t('testimonial-3-text'),
        name: t('testimonial-3-name'),
        position: t('testimonial-3-position'),
      },
    ],
    [t] // Recalculate only when the translation function (`t`) changes
  );

  return (
    <div className="testimonials_inner_content">
      <div className="section_tittle">
        <h2>{t('title')}</h2>
        <p>{t('content')}</p>
      </div>
      <div className="testimonials_slider">
        <Swiper
          speed={1200}
          ref={sliderRef}
          spaceBetween={50}
          slidesPerView={1}>
          {testimonialsSlides.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="itme">
                <div className="testimonials_text">
                  <p>{testimonial.text}</p>
                </div>
                <div className="client_name">
                  <h4>{testimonial.name}</h4>
                  <h5>{testimonial.position}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          style={{ border: 'none' }}
          className="owl-prev"
          onClick={() => handlePrev()}>
          <i className="fa fa-angle-left"></i>
        </button>
        <button
          style={{ border: 'none' }}
          className="owl-next"
          onClick={() => handleNext()}>
          <i className="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
