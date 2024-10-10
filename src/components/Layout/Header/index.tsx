import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import useSWR from 'swr';

import { Logo } from '@/assets/images';

import { ContactInformation } from '@/types';

import { getContactInformation } from '@/api/contact';

function Header() {
  const PROJECT_NAME = import.meta.env.VITE_PROJECT_NAME as string;

  const { t } = useTranslation('common');

  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname.endsWith(path) ? 'active' : '';

  const [contactInfo, setContactInfo] = useState<ContactInformation>();
  const [mobileMenu, setMobileMenu] = useState(false);

  const { data, isLoading } = useSWR('contactInfo', getContactInformation);

  useEffect(() => {
    if (data) {
      setContactInfo(data);
    }
  }, [data]);

  if (isLoading) return <div>{t('loading')}</div>;

  return (
    <header>
      <div className="header_top">
        <div className="container">
          <div className="pull-left company_content">
            <h4>{PROJECT_NAME}</h4>
          </div>

          <div className="pull-right header_language">
            <div className="selector">
              <select name="countries" style={{ width: '300px' }}>
                <option value="yt">English</option>
              </select>
            </div>
            <ul className="header_social">
              {contactInfo?.instagram && (
                <li>
                  <a href={contactInfo.instagram} target="_blank">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              )}
              {contactInfo?.facebook && (
                <li>
                  <a href={contactInfo.facebook} target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
              )}
              {contactInfo?.whatsapp && (
                <li>
                  <a href={contactInfo.whatsapp} target="_blank">
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="logo_area">
        <div className="container">
          <div className="pull-left logo_neno">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="pull-right contact_details_area">
            <div className="contact_item">
              <div className="media">
                <div className="media-left">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="media-body">
                  <h4>{t('contact.phone')}</h4>
                  <h5>{contactInfo?.phone}</h5>
                </div>
              </div>
            </div>
            <div className="contact_item">
              <div className="media">
                <div className="media-left">
                  <i className="fa fa-envelope-o"></i>
                </div>
                <div className="media-body">
                  <h4>{t('contact.email')}</h4>
                  <h5>{contactInfo?.email}</h5>
                </div>
              </div>
            </div>
            <div className="contact_item">
              <div className="media">
                <div className="media-left">
                  <i className="fa fa-location"></i>
                </div>
                <div className="media-body">
                  <h4>{t('contact.address')}</h4>
                  <h5>{contactInfo?.address}</h5>
                </div>
              </div>
            </div>
            <Link className="request_btn" to="/contact">
              {t('header.price_request')}
            </Link>
          </div>
        </div>
      </div>

      <div className="main_menu_area">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                onClick={() => setMobileMenu(!mobileMenu)}>
                <span className="sr-only"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <div
              className={`collapse navbar-collapse ${mobileMenu ? 'in' : ''}`}>
              <ul className="nav navbar-nav">
                <li className={isActive('/') ? 'active' : ''}>
                  <Link to="/">{t('nav.home')}</Link>
                </li>

                <li className={isActive('/projects') ? 'active' : ''}>
                  <Link to="/projects">{t('nav.projects')}</Link>
                </li>

                <li className={isActive('/services') ? 'active' : ''}>
                  <Link to="/services">{t('nav.services')}</Link>
                </li>

                <li className={isActive('/about') ? 'active' : ''}>
                  <Link to="/about">{t('nav.about')}</Link>
                </li>

                <li className={isActive('/contact') ? 'active' : ''}>
                  <Link to="/contact">{t('nav.contact')}</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
