import { ChangeEvent, FormEvent, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { ContactMessageForm } from '@/types';

import { sendContactMessage } from '@/api/contact';

const ContactForm = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'contact' });
  const [contactForm, setContactForm] = useState<ContactMessageForm>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleContactFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prevFormState) => ({ ...prevFormState, [name]: value }));
  };

  const handleContactFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await sendContactMessage(contactForm);
    } catch (error) {
      alert('Error submitting message. Please try again.');
      console.log('error:', error);
    }
    return true;
  };

  return (
    <form onSubmit={handleContactFormSubmit}>
      <div className="col-md-12">
        <input
          required
          type="text"
          name="first_name"
          placeholder={t('form_name')}
          onChange={handleContactFormChange}
        />
        <input
          required
          type="text"
          name="last_name"
          placeholder={t('form_lastname')}
          onChange={handleContactFormChange}
        />
        <input
          required
          type="email"
          name="email"
          placeholder={t('form_email')}
          onChange={handleContactFormChange}
        />
        <input
          required
          type="text"
          name="phone"
          placeholder={t('form_phone')}
          onChange={handleContactFormChange}
        />
      </div>
      <div className="col-md-12">
        <textarea
          required
          rows={3}
          placeholder={t('form_message')}
          name="message"
          defaultValue={''}
          onChange={handleContactFormChange}
        />
      </div>
      <button className="comment_submit" type="submit">
        {t('send_a_message')}
      </button>
    </form>
  );
};

export default ContactForm;
