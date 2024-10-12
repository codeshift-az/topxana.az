import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { useInView } from 'framer-motion';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isViewed = useInView(ref, { once: true, margin: '-20px' });
  const { t } = useTranslation('pages', {
    keyPrefix: 'home',
  });

  return (
    <section className="conpany_about_area">
      <div className="container">
        <div ref={ref} className="row">
          <div
            style={{ transitionDelay: '0.3s', transition: '0.6s all' }}
            className={`${isViewed ? 'visible' : 'hiddenAllLeft'} col-md-6`}>
            <div className="company_content">
              <div className="about_tittle">
                <h2>{t('about.title')}</h2>
              </div>
              <p>{t('about.about-1')} </p>
              <p>{t('about.about-2')}</p>
              <Link className="read_more_btn" to="/about">
                {t('read_more')} <i className="fa fa-angle-right"></i>
              </Link>
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
