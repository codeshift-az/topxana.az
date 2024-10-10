import type { FC } from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export type ServiceSkeletonProps = {
  mdColumns: number;
  xsColumns: number;
  count: number;
};

const ServiceSkeleton: FC<ServiceSkeletonProps> = ({
  mdColumns,
  xsColumns,
  count,
}) => {
  return (
    <section className="project_item_area">
      <div className="container">
        <div className="row">
          {[...Array(count)].map((_, i) => (
            <div key={i} className={`col-xs-${xsColumns} col-md-${mdColumns}`}>
              <Skeleton key={i} height={478} style={{ width: '100%' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSkeleton;
