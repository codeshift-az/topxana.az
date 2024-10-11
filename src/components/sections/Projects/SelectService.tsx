import { useTranslation } from 'react-i18next';

import { useServicesStore } from '@/store';
import { useProjectsFilterStore } from '@/store/projects';

const SelectService = () => {
  const { state: services } = useServicesStore();
  const { activeService, setActiveService } = useProjectsFilterStore();
  const { t } = useTranslation('common', {
    keyPrefix: 'services',
  });

  // For some reason, if I change services directly, it changes in global state
  const localServices = services ? [...services] : [];

  if (!services) {
    return <div>Loading...</div>;
  }

  if (localServices.findIndex((service) => service.slug === t('all')) === -1) {
    localServices.unshift({
      slug: t('all'),
      title: t('all'),
      description: t('all'),
      images: [],
      updated_at: '',
      created_at: '',
    });
  }

  return (
    <ul className="portfolio_menu">
      {localServices?.map((service) => (
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
  );
};

export default SelectService;
