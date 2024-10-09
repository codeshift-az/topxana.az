import { useTranslation } from 'react-i18next';

import { BannerBg } from '@/assets/images';

const BannerAreaSection = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'contact' });
  return (
    <section
      className="banner_area"
      style={{ backgroundImage: `url(${BannerBg})` }}>
      <div className="container">
        <div className="banner_text">
          <h4>{t('title')}</h4>
        </div>
      </div>
    </section>
  );
};

export default BannerAreaSection;
