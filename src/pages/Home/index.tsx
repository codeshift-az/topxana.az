import { useTranslation } from 'react-i18next';

import Layout from '@/components/Layout';

import { getPageTitle } from '@/helpers';

import About from './sections/About';
import GetAQuote from './sections/GetAQuote';
import Projects from './sections/Projects';
import Services from './sections/Services';
import HeroSlider from './sections/Slider';
import Testimonials from './sections/Testimonials';

function Home() {
  const { t } = useTranslation('pages', { keyPrefix: 'home' });

  // This local var is redundant
  const pageTitle = getPageTitle(t('title'));

  document.title = pageTitle;

  return (
    <Layout>
      <HeroSlider />
      <Services mdColumns={4} xsColumns={12} />
      <GetAQuote />
      <Projects />
      <About />
      <Testimonials />
    </Layout>
  );
}

export default Home;
