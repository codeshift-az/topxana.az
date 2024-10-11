import { useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import Layout from '@/components/Layout';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services/Services.tsx';
import Testimonials from '@/components/sections/Testimonials';
import FetchPageData from '@/components/ui/FetchPageData.tsx';
import Preloader from '@/components/ui/Preloader.tsx';

import { getPageTitle } from '@/helpers';

import { useContactStore, useHeroSliderStore, useServicesStore } from '@/store';
import { useProjectsStore } from '@/store/projects';

import GetAQuote from '@/pages/Home/GetAQuote';
import HeroSlider from '@/pages/Home/Slider';

function Home() {
  const { t } = useTranslation('pages', { keyPrefix: 'home' });

  // This local var is redundant
  const pageTitle = getPageTitle(t('title'));
  const { loadInfo: loadContactInfo } = useContactStore();
  const { loadInfo: loadHeroSlider } = useHeroSliderStore();
  const { loadInfo: loadProjects } = useProjectsStore();
  const { loadInfo: loadServices } = useServicesStore();

  const fetchers = useMemo(
    () => [loadContactInfo, loadHeroSlider, loadProjects, loadServices],
    [loadContactInfo, loadHeroSlider, loadProjects, loadServices]
  );

  document.title = pageTitle;

  return (
    <Layout>
      <FetchPageData fetchers={fetchers} />
      <Preloader />
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
