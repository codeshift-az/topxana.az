import useSWR from 'swr';

import { getServiceList } from '@/api/service';

import ServiceItem from './components/ServiceItem.tsx';

type ServicesProps = {
  mdColumns: number;
  xsColumns: number;
};

const Services = ({ xsColumns, mdColumns }: ServicesProps) => {
  const { isLoading, data } = useSWR(`services`, getServiceList);

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="project_item_area">
      <div className="container">
        <div className="row">
          {data?.map((service, i) => (
            <ServiceItem
              key={service?.slug || i}
              delay={i * 50 + 100}
              service={service}
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
