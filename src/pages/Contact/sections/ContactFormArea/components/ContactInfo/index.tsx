import { useTranslation } from 'react-i18next';

import useSWR from 'swr';

import { getContactInformation } from '@/api/contact';

const ContactInfo = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'contact' });
  const { data: contactInfo, isLoading: isContactInfoLoading } = useSWR(
    'contactinfo',
    getContactInformation
  );

  if (isContactInfoLoading) return <div>{t('loading')}</div>;

  return (
    <div className="contact_details">
      <div className="map_area" id="mapBox">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3440591001636!2d49.844190475147826!3d40.37906655793209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da7a06b402f%3A0xd8897cf79ec36111!2zMjggQWzEscWfdmVyacWfIE1lcmtlemk!5e0!3m2!1str!2saz!4v1728471403968!5m2!1str!2saz"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="comm_tittle">
        <h4>{t('contact_info')}</h4>
      </div>
      <div className="media">
        <div className="media-left">
          <i className="fa fa-map-marker" />
        </div>
        <div className="media-body">
          <p>{contactInfo?.address}</p>
        </div>
      </div>
      <div className="media">
        <div className="media-left">
          <i className="fa fa-phone" />
        </div>
        <div className="media-body">
          <h4>{contactInfo?.phone}</h4>
        </div>
      </div>
      <div className="media">
        <div className="media-left">
          <i className="fa fa-envelope" />
        </div>
        <div className="media-body">
          <h3>{contactInfo?.email}</h3>
          <ul>
            {contactInfo?.facebook && (
              <li>
                <a href={contactInfo.facebook} target="_blank">
                  <i className="fa fa-facebook" />
                </a>
              </li>
            )}
            {contactInfo?.instagram && (
              <li>
                <a href={contactInfo.instagram} target="_blank">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            )}
            {contactInfo?.whatsapp && (
              <li>
                <a href={contactInfo.whatsapp} target="_blank">
                  <i className="fa fa-whatsapp" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
