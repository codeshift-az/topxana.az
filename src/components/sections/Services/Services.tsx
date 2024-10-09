import { FC, useEffect } from 'react';

import useSWR from 'swr';

import ServiceItem from '@/components/sections/Services/ServiceItem.tsx';
import ServiceSkeleton from '@/components/sections/Services/ServiceSkeleton.tsx';

import { useServicesStore } from '@/store';

import { getServices } from '@/api/services';

type ServicesProps = {
  page: number;
  limit: number;
  mdColumns: number;
  xsColumns: number;
  count: number;
};

const Services: FC<ServicesProps> = ({
  page,
  limit,
  xsColumns,
  mdColumns,
  count,
}) => {
  const { isLoading, data } = useSWR(
    `page=${page}&limit=${limit}`,
    getServices
  );
  const { state: services, updateInfo } = useServicesStore();

  useEffect(() => {
    if (data) {
      updateInfo(data);
    }
  }, [data]);

  if (isLoading)
    return (
      <ServiceSkeleton
        xsColumns={xsColumns}
        mdColumns={mdColumns}
        count={count}
      />
    );

  return (
    <section className="project_item_area">
      <div className="container">
        <div className="row">
          {services?.results?.map((service, i) => (
            <ServiceItem
              delay={i * 50 + 100}
              image={service?.images[0]?.image}
              title={service?.title}
              description={service?.description}
              slug={service?.slug}
              xsColumns={xsColumns}
              mdColumns={mdColumns}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
