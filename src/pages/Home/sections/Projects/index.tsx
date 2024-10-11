import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';
import useSWR from 'swr';

import { useProjectsFilterStore } from '@/store';

import { getProjectList } from '@/api/project';

import SelectService from './components/SelectService.tsx';

const Projects = () => {
  const { activeService } = useProjectsFilterStore();
  const { isLoading, data } = useSWR('projects', getProjectList);
  const { t } = useTranslation('common', {
    keyPrefix: 'services',
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Filter projects by active service
  const filteredProjects = data?.filter((project) => {
    if (!activeService) return true;
    if (activeService === t('all')) return true;

    return project?.service?.slug === activeService;
  });

  return (
    <section className="portfolio_area">
      <div className="container">
        <SelectService />
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
