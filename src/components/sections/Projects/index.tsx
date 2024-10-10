import { useEffect } from 'react';

import { motion } from 'framer-motion';
import useSWR from 'swr';

import ProjectsSkeleton from '@/components/sections/Projects/ProjectsSkeleton.tsx';
import SelectService from '@/components/sections/Projects/SelectService.tsx';

import { useProjectsFilterStore, useProjectsStore } from '@/store/projects';

import { getProjects } from '@/api/projects';

const Projects = () => {
  const { activeService } = useProjectsFilterStore();
  const { isLoading, data } = useSWR(`${activeService}`, getProjects);
  const { updateInfo, state: projects } = useProjectsStore();

  useEffect(() => {
    if (data) {
      updateInfo(data);
    }
  }, [data]);

  if (isLoading) {
    return <ProjectsSkeleton />;
  }

  console.log(projects);

  return (
    <section className="portfolio_area">
      <div className="container">
        <SelectService />
        <div className="portfolio_inner row">
          {projects?.map((project, i) => (
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
