import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import useInView from '@/hooks/useInView.tsx';

type ServiceItemProps = {
  xsColumns: number;
  mdColumns: number;
  delay: number;
  title: string;
  description: string;
  slug: string;
  image: string;
};

const ServiceItem = ({
  xsColumns,
  mdColumns,
  delay,
  slug,
  title,
  image,
  description,
}: ServiceItemProps) => {
  const [ref, isViewed] = useInView<HTMLDivElement>();
  const { t } = useTranslation('common');

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
          src={image}
          alt={title}
        />
        <div className="project_item_content">
          <Link to={`/services/${slug}`}>
            <h3>{title}</h3>
          </Link>
          <p>{description}</p>
          <Link className="read_more_btn" to={`/services/${slug}`}>
            {t('read_more')} <i className="fa fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
