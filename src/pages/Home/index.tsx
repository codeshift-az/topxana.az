import { useTranslation } from 'react-i18next';

import Layout from '@/components/Layout';

import { getPageTitle } from '@/helpers';

function Home() {
  const { t } = useTranslation('pages', { keyPrefix: 'home' });

  const pageTitle = getPageTitle(t('title'));

  document.title = pageTitle;

  return (
    <Layout>
      <h1>{t('title')}</h1>
    </Layout>
  );
}

export default Home;
