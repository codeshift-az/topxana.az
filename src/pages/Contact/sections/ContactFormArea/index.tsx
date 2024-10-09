import { useEffect } from 'react';
import { Link } from 'react-router-dom';

//i18next
import { useTranslation } from 'react-i18next';

import useSWR from 'swr';

//zustand
import { useContactStore } from '@/store';

import { getContactInformation } from '@/api/contact';

//components
import ContactForm from '../../components/ContactForm';

const ContactFormArea = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'contact' });
  const { data, isLoading } = useSWR('contactinfo', getContactInformation);
  const { state: contactInfo, updateInfo } = useContactStore();

  useEffect(() => {
    if (data) {
      updateInfo(data);
    }
  }, [data]);

  if (isLoading) return <div>{t('loading')}</div>;

  return (
    <section className="contact_from_area contact_from_area2">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="blog_comment_from">
              <p>
                Donec eget justo vel lectus tristique facilisis. Mauris ornare
                enim ut dui pellentesque, id volutpat nunc elementum. Mauris nec
                commodo diam. In auctor mi in ante porttitor, ut semper metus
                lacinia. Suspendisse maximus condimentum ipsum nec aliquet.
                Phasellus maximus turpis euismod euismod tristique. In sagittis
                faucibus pulvinar.
              </p>
              <div className="comm_tittle">
                <h4>{t('send_a_message')}</h4>
              </div>
              <div className="row">
                <ContactForm t={t} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
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
                  <p>{contactInfo.address}</p>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <i className="fa fa-phone" />
                </div>
                <div className="media-body">
                  <h4>{contactInfo.phone}</h4>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <i className="fa fa-envelope" />
                </div>
                <div className="media-body">
                  <h3>{contactInfo.email}</h3>
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fa fa-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-google-plus" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-pinterest" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormArea;
