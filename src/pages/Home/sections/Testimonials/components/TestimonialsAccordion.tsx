import { useMemo, useState } from 'react';

import { useTranslation } from 'react-i18next';

const TestimonialsAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1); // По умолчанию открыт первый аккордеон
  const { t } = useTranslation('pages', {
    keyPrefix: 'home.testimonials',
  });

  const accordionData = useMemo(
    () => [
      {
        id: 1,
        title: t('accordion-1-title'),
        content: t('accordion-1-content'),
      },
      {
        id: 2,
        title: t('accordion-2-title'),
        content: t('accordion-2-content'),
      },
      {
        id: 3,
        title: t('accordion-3-title'),
        content: t('accordion-3-content'),
      },
      {
        id: 4,
        title: t('accordion-4-title'),
        content: t('accordion-4-content'),
      },
      {
        id: 5,
        title: t('accordion-5-title'),
        content: t('accordion-5-content'),
      },
    ],
    [t]
  );

  const toggleAccordion = (id: number) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="chose_inner_area">
      <div className="section_tittle">
        <h2>{t('why-us')}</h2>
        <p>{t('why-us-content')} </p>
      </div>
      <div
        className="panel-group"
        id="accordion"
        role="tablist"
        aria-multiselectable="true">
        {accordionData.map(({ id, title, content }) => (
          <div className="panel panel-default" key={id}>
            <div className="panel-heading" role="tab" id={`heading${id}`}>
              <h4 className="panel-title">
                <a
                  className="accordion-toggle"
                  onClick={() => toggleAccordion(id)}
                  aria-expanded={activeAccordion === id}>
                  {title}
                  <span>
                    {activeAccordion === id ? (
                      <i className="fa fa-minus" aria-hidden="true"></i>
                    ) : (
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    )}
                  </span>
                </a>
              </h4>
            </div>
            <div
              id={`chose${id}`}
              style={{
                maxHeight: activeAccordion === id ? '1000px' : '0',
                transition: 'all 0.5s',
                display: 'block',
                overflow: 'hidden',
              }}
              className={`panel-collapse collapse`}
              role="tabpanel"
              aria-labelledby={`heading${id}`}>
              <div className="panel-body">{content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsAccordion;
