import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProjectsSkeleton = () => {
  return (
    <div className="container">
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}
        className="portfolio_inner row">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="col-md-3 portfolio_single p1 p3">
            <Skeleton height={200} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSkeleton;
