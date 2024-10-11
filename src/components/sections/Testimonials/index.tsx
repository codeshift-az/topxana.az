import { useTranslation } from 'react-i18next';

import TestimonialsAccordion from '@/components/sections/Testimonials/TestimonialsAccordion.tsx';
import TestimonialsSlider from '@/components/sections/Testimonials/TestimonialsSlider.tsx';

import useInView from '@/hooks/useInView.tsx';

const Testimonials = () => {
  const [ref, isViewed] = useInView<HTMLDivElement>();
  const { t } = useTranslation('common', {
    keyPrefix: 'testimonials',
  });

  return (
    <section className="testimonials_area">
      <div className="container">
        <div ref={ref} className="row">
          <div
            style={{ transitionDelay: '0.3s', transition: '0.6s all' }}
            className={`${isViewed ? 'visible' : 'hiddenAllLeft'} col-md-6`}>
            <div className="testimonials_inner_content">
              <div className="section_tittle">
                <h2>{t('title')}</h2>
                <p>{t('content')} </p>
              </div>
              <TestimonialsSlider />
            </div>
          </div>
          <div
            style={{ transitionDelay: '0.3s', transition: '0.6s all' }}
            className={`${isViewed ? 'visible' : 'hiddenAllRight'} col-md-6`}>
            <div className="chose_inner_area">
              <div className="section_tittle">
                <h2>{t('why-us')}</h2>
                <p>{t('why-us-content')} </p>
              </div>
              <TestimonialsAccordion />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
