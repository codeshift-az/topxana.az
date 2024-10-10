import ReadMore from '@/components/ui/ReadMore.tsx';

import useInView from '@/hooks/useInView.tsx';

const About = () => {
  const [ref, isViewed] = useInView<HTMLDivElement>();

  return (
    <section className="conpany_about_area">
      <div className="container">
        <div ref={ref} className="row">
          <div
            style={{ transitionDelay: '0.3s', transition: '0.6s all' }}
            className={`${isViewed ? 'visible' : 'hiddenAllLeft'} col-md-6`}>
            <div className="company_content">
              <div className="about_tittle">
                <h2>About Our Company</h2>
              </div>
              <p>
                Mauris efficitur interdum tincidunt. Donec ac lobortis orci.
                Mauris suscipit nec nisl venenatis dictum. Aliquam interdum
                mauris consequat est scelerisque, cursus mattis orci tempor.
                Cras quis pellentesque diam.{' '}
              </p>
              <p>
                Praesent vel volutpat tortor. Proin ac iaculis quam. Donec sit
                amet ipsum eu sem sollicitudin porttitor imperdiet ut nisi. In
                hac habitasse platea dictumst. Sed eu nisi leo. Phasellus mollis
                viverra velit at porta. Mauris leo ante, lacinia non diam sed.
              </p>
              <ReadMore href="/about" />
            </div>
          </div>
          <div
            style={{ transitionDelay: '0.3s', transition: '0.6s all' }}
            className={`${isViewed ? 'visible' : 'hiddenAllRight'} col-md-6`}>
            <div className="company_image">
              <img
                src="https://placehold.co/570x370"
                alt={import.meta.env.VITE_PROJECT_NAME as string}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
