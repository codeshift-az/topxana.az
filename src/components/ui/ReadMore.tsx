import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

type ReadMoreProps = {
  href: string;
};

const ReadMore: FC<ReadMoreProps> = ({ href }) => {
  const { t } = useTranslation('common');

  return (
    <Link className="read_more_btn" to={href}>
      {t('read_more')} <i className="fa fa-angle-right"></i>
    </Link>
  );
};

export default ReadMore;
