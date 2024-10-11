import { useTranslation } from 'react-i18next';

import { useServicesStore } from '@/store';
import { useProjectsFilterStore } from '@/store/projects';

const SelectService = () => {
  const { state: services } = useServicesStore();
  const { activeService, setActiveService } = useProjectsFilterStore();
  const { t } = useTranslation('common', {
    keyPrefix: 'services',
  });

  if (!services) {
    return <div>Loading...</div>;
  }

  if (services.findIndex((service) => service.slug === t('all')) === -1) {
    services.unshift({
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
      {services?.map((service) => (
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
