import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import useSWR from 'swr';

import { Logo } from '@/assets/images';

import HeaderBottom from '@/components/Layout/Header/HeaderBottom.tsx';

import { useContactStore } from '@/store';

import { getContactInformation } from '@/api/contact';

function Header() {
  const { t } = useTranslation('common');
  const logoAreaRef = useRef<HTMLDivElement | null>(null);

  const PROJECT_NAME = import.meta.env.VITE_PROJECT_NAME as string;

  const { data, isLoading } = useSWR('contactInfo', getContactInformation);
  const { state: contactInfo, updateInfo } = useContactStore();

  useEffect(() => {
    if (data) {
      updateInfo(data);
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
              <select className="language-select" name="countries">
                <option value="en">English</option>
                <option value="az">Azerbaijani</option>
                <option value="ru">Russian</option>
              </select>
            </div>
            <ul className="header_social">
              {contactInfo.instagram && (
                <li>
                  <a href={contactInfo.instagram} target="_blank">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              )}
              {contactInfo.facebook && (
                <li>
                  <a href={contactInfo.facebook} target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
              )}
              {contactInfo.whatsapp && (
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

      <div ref={logoAreaRef} className="logo_area">
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
                  <h5>{contactInfo.phone}</h5>
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
                  <h5>{contactInfo.email}</h5>
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
                  <h5>{contactInfo.address}</h5>
                </div>
              </div>
            </div>
            <Link className="request_btn" to="/contact">
              {t('header.price_request')}
            </Link>
          </div>
        </div>
      </div>

      <HeaderBottom logoAreaRef={logoAreaRef} />
    </header>
  );
}

export default Header;
