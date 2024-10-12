import { useRef } from 'react';

import { useInView } from 'framer-motion';

import TestimonialsAccordion from './components/TestimonialsAccordion.tsx';
import TestimonialsSlider from './components/TestimonialsSlider.tsx';

const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isViewed = useInView(ref, { once: true, margin: '-20px' });

  return (
    <section className="testimonials_area">
      <div className="container">
        <div className="row">
          <div
            ref={ref}
            style={{ transitionDelay: '0.3s', transition: '0.6s all' }}
            className={`${isViewed ? 'visible' : 'hiddenAllLeft'} col-md-6`}>
            <TestimonialsSlider />
          </div>

          <div
            style={{ transitionDelay: '0.3s', transition: '0.6s all' }}
            className={`${isViewed ? 'visible' : 'hiddenAllRight'} col-md-6`}>
            <TestimonialsAccordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
