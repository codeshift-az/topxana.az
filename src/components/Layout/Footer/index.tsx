import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import useSWR from 'swr';

import { LogoLight } from '@/assets/images';

import { getContactInformation } from '@/api/contact';
import { getServiceList } from '@/api/service';

const PROJECT_NAME = import.meta.env.VITE_PROJECT_NAME as string;

const Footer = () => {
  const { t } = useTranslation('common');
  const { data: contactInfo, isLoading: isContactLoading } = useSWR(
    'contactInfo',
    getContactInformation
  );

  const { data: service, isLoading: isServiceLoading } = useSWR(
    'service',
    getServiceList
  );

  if (isServiceLoading || isContactLoading) return <div>{t('loading')}</div>;

  return (
    <footer className="footer_area">
      <div className="footer_widget_area">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer_widget_inner">
                <div className="f_widget_tittle">
                  <h3>{t('footer.about_us_heading')}</h3>
                </div>
                <div className="f_about_widget">
                  <p>{t('footer.about_us_description')}</p>
                  <img src={LogoLight} />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_widget_inner">
                <div className="f_widget_tittle">
                  <h3>{t('nav.services')}</h3>
                </div>
                <div className="f_news_widget ">
                  <ul className="footer-services-list">
                    {service?.map((service, index) => (
                      <li key={index}>
                        <Link to={`/services/${service.slug}`}>
                          <i className="fa fa-angle-right" aria-hidden="true" />
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_widget_inner">
                <div className="f_widget_tittle">
                  <h3>{t('footer.links')}</h3>
                </div>
                <div className="f_navigation_widget">
                  <ul>
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        {t('nav.home')}
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        {t('nav.about')}
                      </Link>
                    </li>
                    <li>
                      <Link to="/services">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        {t('nav.services')}
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        {t('nav.contact')}
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        {t('nav.projects')}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_widget_inner">
                <div className="f_widget_tittle">
                  <h3>{t('footer.contact_us_heading')}</h3>
                </div>
                <div className="f_contact_widget">
                  <p>{t('footer.contact_us_description')}</p>
                  <ul className="contact_lsit">
                    <li>
                      <a href="#">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                        {contactInfo?.address}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone" aria-hidden="true" />
                        {contactInfo?.phone}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope-o" aria-hidden="true" />
                        {contactInfo?.email}
                      </a>
                    </li>
                  </ul>
                  <ul className="f_widget_social">
                    {contactInfo?.facebook && (
                      <li>
                        <a href={contactInfo.facebook} target="_blank">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                    )}
                    {contactInfo?.whatsapp && (
                      <li>
                        <a href={contactInfo.whatsapp} target="_blank">
                          <i className="fa fa-whatsapp" />
                        </a>
                      </li>
                    )}
                    {contactInfo?.instagram && (
                      <li>
                        <a href={contactInfo.instagram} target="_blank">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright_area">
        <div className="container">
          <div className="pull-left copyright_left">
            <h4>
              Developed and Designed by
              <a href=""> CodeShift</a>
            </h4>
          </div>
          <div className="pull-right copyright_right">
            <h5>
              © 2009 - 2016 <a href="">{PROJECT_NAME}</a>. All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
