import { useTranslation } from 'react-i18next';

const GetAQuote = () => {
  const { t } = useTranslation('pages', {
    keyPrefix: 'home.constructor',
  });

  return (
    <section className="project_quote">
      <div className="container">
        <div className="pull-left left_content">
          <h4>{t('title')}</h4>
        </div>
        <div className="pull-right right_content">
          <a className="get_btn" href="#">
            {t('get_a_quote')}
          </a>
          <a className="project_btn" href="#">
            {t('our_projects')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetAQuote;
