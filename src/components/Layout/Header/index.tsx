import { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import useSWR from 'swr';

import { Logo } from '@/assets/images';

import HeaderBottom from '@/components/Layout/Header/HeaderBottom.tsx';

import { getContactInformation } from '@/api/contact';

function Header() {
  const { t, i18n } = useTranslation('common');
  const logoAreaRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const PROJECT_NAME = import.meta.env.VITE_PROJECT_NAME as string;
  const { data, isLoading } = useSWR('contactInfo', getContactInformation);

  const languages = [
    {
      code: 'en',
      name: 'English',
    },
    {
      code: 'ru',
      name: 'Русский',
    },
    {
      code: 'az',
      name: 'Azərbaycan',
    },
  ];

  const handleLanguageChange = (newLanguage: string) => {
    const pathParts = location.pathname.split('/');
    if (languages.some((lang) => lang.code === pathParts[1])) {
      pathParts[1] = newLanguage;
    } else {
      pathParts.unshift(newLanguage);
    }
    const newPath = pathParts.join('/');
    navigate(newPath);
    i18n.changeLanguage(newLanguage);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <header>
      <div className="header_top">
        <div className="container">
          <div className="pull-left company_content">
            <h4>{PROJECT_NAME}</h4>
          </div>

          <div className="pull-right header_language">
            <div className="selector">
              <select
                className="language-select"
                name="countries"
                value={i18n.language}
                onChange={(e) => handleLanguageChange(e.target.value)}>
                {languages.map((language) => (
                  <option key={language.code} value={language.code}>
                    {language.name}
                  </option>
                ))}
              </select>
            </div>
            <ul className="header_social">
              {data?.instagram && (
                <li>
                  <a href={data?.instagram} target="_blank">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              )}
              {data?.facebook && (
                <li>
                  <a href={data?.facebook} target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
              )}
              {data?.whatsapp && (
                <li>
                  <a href={data?.whatsapp} target="_blank">
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
                  <h5>{data?.phone}</h5>
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
                  <h5>{data?.email}</h5>
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
                  <h5>{data?.address}</h5>
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
