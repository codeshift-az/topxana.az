import type { FC } from 'react';
import { Link } from 'react-router-dom';

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

const ServiceItem: FC<ServiceItemProps> = ({
  xsColumns,
  mdColumns,
  delay,
  slug,
  title,
  image,
  description,
}) => {
  const [ref, isViewed] = useInView<HTMLDivElement>();

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
            Read More <i className="fa fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
