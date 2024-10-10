import type { FC, RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { useHeaderFixedStore } from '@/store';

type HeaderBottomProps = {
  logoAreaRef: RefObject<HTMLDivElement>;
};

const HeaderBottom: FC<HeaderBottomProps> = ({ logoAreaRef }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { isFixed, setIsFixed } = useHeaderFixedStore();
  const { t } = useTranslation('common');
  const menuRef = useRef<HTMLDivElement | null>(null);

  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname.endsWith(path) ? 'active' : '';

  useEffect(() => {
    const handleScroll = () => {
      const menu = menuRef.current;
      const logoArea = logoAreaRef.current;

      if (menu && logoArea) {
        const menuTopOffset = menu.offsetTop;
        const logoAreaBottomOffset = logoArea.offsetTop + logoArea.offsetHeight;

        // Проверяем, пересекла ли верхняя граница viewport-а верхнюю границу меню
        if (window.scrollY >= menuTopOffset) {
          setIsFixed(true);
        }

        // Проверяем, пересекла ли верхняя граница меню нижнюю границу логотипа
        if (window.scrollY <= logoAreaBottomOffset) {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFixed, logoAreaRef, setIsFixed]);

  return (
    <div
      style={{
        zIndex: '99',
      }}
      ref={menuRef}
      className={`main_menu_area ${isFixed ? 'navbar-fixed-top' : 'position-relative'}`}>
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
            style={{
              overflow: 'hidden',
              maxHeight: mobileMenu ? '500px' : '0',
              opacity: mobileMenu ? '1' : '0',
              transition: 'all 0.5s',
              visibility: mobileMenu ? 'visible' : 'hidden',
            }}
            className={`collapse navbar-collapse`}>
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
  );
};

export default HeaderBottom;
