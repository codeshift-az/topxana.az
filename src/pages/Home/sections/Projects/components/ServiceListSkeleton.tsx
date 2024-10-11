import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ServiceListSkeleton = () => {
  return (
    <div
      style={{ gap: '32px', marginBottom: '40px' }}
      className="row services_list_skeleton justify-content-center">
      {[...Array(6)].map((_, i) => (
        <Skeleton style={{ height: '19px', width: '60px' }} key={i} />
      ))}
    </div>
  );
};

export default ServiceListSkeleton;
