import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import useInView from '@/hooks/useInView.tsx';

const About = () => {
  const [ref, isViewed] = useInView<HTMLDivElement>();
  const { t } = useTranslation('common', {
    keyPrefix: 'about',
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
                <h2>{t('title')}</h2>
              </div>
              <p>{t('about-1')} </p>
              <p>{t('about-2')}</p>
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
