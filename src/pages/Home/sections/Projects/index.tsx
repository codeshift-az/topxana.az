import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';
import useSWR from 'swr';

import { useProjectsFilterStore } from '@/store';

import { getProjectList } from '@/api/project';
import { getServiceList } from '@/api/service';

const Projects = () => {
  const { activeService, setActiveService } = useProjectsFilterStore();
  const { t } = useTranslation('pages', {
    keyPrefix: 'home.services',
  });

  const { isLoading: loadingProjects, data: projectData } = useSWR(
    'projects',
    getProjectList
  );
  const { isLoading: loadingServices, data: serviceData } = useSWR(
    'services',
    getServiceList
  );

  if (loadingProjects || loadingServices) {
    return <div>Loading...</div>;
  }

  // Combine services and add "All" option at the beginning
  const services = serviceData
    ? [{ slug: t('all'), title: t('all') }, ...serviceData]
    : [];

  // Filter projects by active service
  const filteredProjects = projectData?.filter((project) => {
    if (!activeService || activeService === t('all')) return true;
    return project?.service?.slug === activeService;
  });

  return (
    <section className="portfolio_area">
      <div className="container">
        {/* Service Selection */}
        <ul className="portfolio_menu">
          {services?.map((service) => (
            <li
              key={service.slug}
              onClick={() => setActiveService(service.slug)}
              className={
                service?.slug === t('all') && !activeService
                  ? 'active'
                  : activeService === service.slug
                    ? 'active'
                    : ''
              }>
              {service.title}
            </li>
          ))}
        </ul>

        {/* Project List */}
        <div className="portfolio_inner row">
          {filteredProjects?.map((project, i) => (
            <motion.div
              className="col-md-3 portfolio_single"
              key={project?.slug || i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              layout>
              <div className="portfolio_content">
                <img src={project?.images[0]?.image} alt={project?.title} />
                <div className="portfolio_overlay">
                  <h3>
                    {project?.title.length > 20
                      ? `${project?.title.slice(0, 20)}...`
                      : project?.title}
                  </h3>
                  <p>
                    {project?.description.length > 30
                      ? `${project?.description.slice(0, 30)}...`
                      : project?.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
