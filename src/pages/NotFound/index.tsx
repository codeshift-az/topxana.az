import { useTranslation } from 'react-i18next';

import Layout from '@/components/Layout';

function NotFound() {
  const { t } = useTranslation('pages', { keyPrefix: 'notFound' });

  return (
    <Layout>
      <h1>404</h1>
      <h2>{t('title')}</h2>
      <p>{t('message')}</p>
    </Layout>
  );
}

export default NotFound;
