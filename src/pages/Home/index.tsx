import { useTranslation } from 'react-i18next';

import GetAQuote from '@/components/Home/GetAQuote';
import HeroSlider from '@/components/Home/Slider';
import Layout from '@/components/Layout';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services/Services.tsx';
import Testimonials from '@/components/sections/Testimonials';

import { getPageTitle } from '@/helpers';

function Home() {
  const { t } = useTranslation('pages', { keyPrefix: 'home' });

  // This local var is redundant
  const pageTitle = getPageTitle(t('title'));

  document.title = pageTitle;

  return (
    <Layout>
      <HeroSlider />
      <Services count={3} page={1} limit={3} mdColumns={4} xsColumns={12} />
      <GetAQuote />
      <Projects />
      <About />
      <Testimonials />
    </Layout>
  );
}

export default Home;
