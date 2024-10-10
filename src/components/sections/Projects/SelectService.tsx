import { useEffect } from 'react';

import useSWR from 'swr';

import ServiceListSkeleton from '@/components/sections/Projects/ServiceListSkeleton.tsx';

import { useServicesStore } from '@/store';
import { useProjectsFilterStore } from '@/store/projects';

import { getServices } from '@/api/services';

const SelectService = () => {
  const { isLoading: isServicesLoading, data } = useSWR(
    `page=${1}&limit=${10}`,
    getServices
  );
  const { state: services, updateInfo } = useServicesStore();
  const { activeService, setActiveService } = useProjectsFilterStore();

  useEffect(() => {
    if (data) {
      updateInfo(data);
    }
  }, [data]);

  if (isServicesLoading) {
    return <ServiceListSkeleton />;
  }

  return (
    <ul className="portfolio_menu">
      {services?.results?.map((service) => (
        <li
          key={service.slug}
          onClick={() => setActiveService(service.slug)}
          className={activeService === service.slug ? 'active' : ''}>
          {service.title}
        </li>
      ))}
    </ul>
  );
};

export default SelectService;
