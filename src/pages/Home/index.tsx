import { useTranslation } from 'react-i18next';

import Layout from '@/components/Layout';

import { getPageTitle } from '@/helpers';

import About from '@/pages/Home/sections/About';
import GetAQuote from '@/pages/Home/sections/GetAQuote';
import Projects from '@/pages/Home/sections/Projects';
import Services from '@/pages/Home/sections/Services';
import HeroSlider from '@/pages/Home/sections/Slider';
import Testimonials from '@/pages/Home/sections/Testimonials';

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
