import { useCallback, useRef } from 'react';

import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

const testimonialsData = [
  {
    id: 1,
    text: '“Morbi dui purus, tincidunt vel feugiat nec, aliquet sed diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce vitae justo vitae ligula aliquam cursus in rhoncus nisl.”',
    name: 'Kedrick Cart',
    position: 'Company Owner',
  },
  {
    id: 2,
    text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue erat at massa consequat, sit amet sollicitudin velit.”',
    name: 'Sarah Smith',
    position: 'Marketing Director',
  },
  {
    id: 3,
    text: '“Nulla facilisi. Integer interdum elit ac elit volutpat, eget accumsan quam pulvinar. Nulla condimentum sem nec viverra lacinia.”',
    name: 'John Doe',
    position: 'CEO at XYZ Inc.',
  },
];

const TestimonialsSlider = () => {
  const sliderRef = useRef<null | SwiperRef>(null);
  const { t } = useTranslation('common', {
    keyPrefix: 'testimonials',
  });

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="testimonials_inner_content">
      <div className="section_tittle">
        <h2>{t('title')}</h2>
        <p>{t('content')} </p>
      </div>
      <div className="testimonials_slider">
        <Swiper
          speed={1200}
          ref={sliderRef}
          spaceBetween={50}
          slidesPerView={1}>
          {testimonialsData.map((testimonial) => (
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

        {/* Кнопки навигации */}
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
