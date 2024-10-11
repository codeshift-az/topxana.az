import { useState } from 'react';

import { useTranslation } from 'react-i18next';

const accordionData = [
  {
    id: 1,
    title: 'Safe & Security Delivery',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente.',
  },
  {
    id: 2,
    title: 'Suspendisse Sed Malesuada Neque',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.',
  },
  {
    id: 3,
    title: 'Maecenas Etfelis Eumagna Volutpat Laoreet',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
  },
  {
    id: 4,
    title: 'Morbi Convallis Eu Dolor Quis Tristique',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
  },
  {
    id: 5,
    title: 'Etiam Tempor et Velit ut Bibendum',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
  },
];

const TestimonialsAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1); // По умолчанию открыт первый аккордеон
  const { t } = useTranslation('common', {
    keyPrefix: 'testimonials',
  });

  const toggleAccordion = (id: number) => {
    setActiveAccordion((prev) => (prev === id ? null : id)); // Закрываем, если уже открыт
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
