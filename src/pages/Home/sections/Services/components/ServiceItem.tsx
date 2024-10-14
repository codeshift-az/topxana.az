import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { useInView } from 'framer-motion';

import { Image } from '@/types';

type Service = {
  title: string;
  description: string;
  slug: string;
  images: Image[];
};

type ServiceItemProps = {
  xsColumns: number;
  mdColumns: number;
  delay: number;
  service: Service;
};

const ServiceItem = ({
  xsColumns,
  mdColumns,
  delay,
  service,
}: ServiceItemProps) => {
  const { t } = useTranslation('pages', {
    keyPrefix: 'home',
  });
  const ref = useRef<HTMLDivElement>(null);

  const isViewed = useInView(ref, { once: true, margin: '-20px' });

  // Limit description to 200 characters
  const truncatedDescription =
    service.description.length > 200
      ? `${service.description.slice(0, 200)}...`
      : service.description;

  return (
    <div
      style={{
        position: 'relative',
        transitionDelay: `${delay}ms`,
        transition: 'all 0.5s',
      }}
      ref={ref}
      className={`${isViewed ? 'visible' : 'hiddenTop'} col-xs-${xsColumns} col-md-${mdColumns}`}>
      <div className="project_item_inner">
        <img
          style={{ width: '100%', maxHeight: '207px', objectFit: 'cover' }}
          src={service.images[0]?.image} // Use the first image from the list
          alt={service.title}
        />
        <div className="project_item_content">
          <Link to={`/services/${service.slug}`}>
            <h3>{service.title}</h3>
          </Link>
          <p>{truncatedDescription}</p>
          <Link className="read_more_btn" to={`/services/${service.slug}`}>
            {t('read_more')} <i className="fa fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
