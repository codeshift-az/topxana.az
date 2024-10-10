import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import useSWR from 'swr';

import { ContactInformation } from '@/types';

import { getContactInformation } from '@/api/contact';

import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

const ContactFormArea = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'contact' });
  const [contactInfo, setContactInfo] = useState<ContactInformation>();
  const { data: contactInfoData, isLoading } = useSWR(
    'contactinfo',
    getContactInformation
  );

  useEffect(() => {
    if (contactInfoData) {
      setContactInfo(contactInfoData);
    }
  }, [contactInfoData]);

  if (isLoading) return <div>Loading....</div>;

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
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <ContactInfo contactInfo={contactInfo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormArea;
