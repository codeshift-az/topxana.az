import useInView from '@/hooks/useInView.tsx';

import TestimonialsAccordion from './components/TestimonialsAccordion.tsx';
import TestimonialsSlider from './components/TestimonialsSlider.tsx';

const Testimonials = () => {
  const [ref, isViewed] = useInView<HTMLDivElement>();

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
