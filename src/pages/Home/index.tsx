import { useTranslation } from 'react-i18next';

import GetAQuote from '@/components/Home/GetAQuote';
import HeroSlider from '@/components/Home/Slider';
import Layout from '@/components/Layout';

import { getPageTitle } from '@/helpers';

function Home() {
  const { t } = useTranslation('pages', { keyPrefix: 'home' });

  // This local var is redundant
  const pageTitle = getPageTitle(t('title'));

  document.title = pageTitle;

  return (
    <Layout>
      <HeroSlider />
      <GetAQuote />
    </Layout>
  );
}

export default Home;
