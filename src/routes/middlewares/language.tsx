import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

interface Props {
  children: React.ReactNode;
}

const LanguageMiddleware = ({ children }: Props) => {
  const navigate = useNavigate();

  const { i18n } = useTranslation();

  const { pathname } = useLocation();

  useEffect(() => {
    const pathLang = pathname.split('/')[1];

    if (!pathLang || ['az', 'en', 'ru'].indexOf(pathLang) === -1) {
      return navigate(`/${i18n.language}${pathname}`, { replace: true });
    }

    if (pathLang !== i18n.language) {
      i18n.changeLanguage(pathLang);
      localStorage.setItem('LANG', pathLang);
    }
  }, [pathname, i18n, navigate]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default LanguageMiddleware;
