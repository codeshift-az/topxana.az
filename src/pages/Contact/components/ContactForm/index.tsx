import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

//axios
import axios from 'axios';
// i18next
import { TFunction } from 'i18next';

interface Props {
  t: TFunction;
}

interface ContactFormState {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
}

const API_URL = import.meta.env.VITE_API_URL as string;

const ContactForm = ({ t }: Props) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [contactForm, setContactForm] = useState<ContactFormState>({
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

  const { email, first_name, last_name, phone, message } = contactForm;

  const handleContactFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      email === '' ||
      first_name === '' ||
      last_name === '' ||
      phone === '' ||
      message === ''
    ) {
      setErrorMessage('Fields cannot be empty! Please fill out all fields!');
      return false;
    } else {
      try {
        await axios.post(`${API_URL}/contact/messages`, contactForm);
      } catch (error) {
        alert('Error submitting message. Please try again.');
        console.log('error:', error);
      }
      setErrorMessage('');
      return true;
    }
  };

  useEffect(() => {
    if (
      email !== '' ||
      first_name !== '' ||
      last_name !== '' ||
      phone !== '' ||
      message !== ''
    ) {
      setErrorMessage('');
    }
  }, [contactForm]);

  return (
    <form onSubmit={handleContactFormSubmit}>
      <div className="col-md-12">
        <input
          className={`${errorMessage !== '' && 'form-error'}`}
          type="text"
          name="first_name"
          placeholder={t('form_name')}
          onChange={handleContactFormChange}
        />
        <input
          className={`${errorMessage !== '' && 'form-error'}`}
          type="text"
          name="last_name"
          placeholder={t('form_lastname')}
          onChange={handleContactFormChange}
        />
        <input
          className={`${errorMessage !== '' && 'form-error'}`}
          type="email"
          name="email"
          placeholder={t('form_email')}
          onChange={handleContactFormChange}
        />
        <input
          className={`${errorMessage !== '' && 'form-error'}`}
          type="text"
          name="phone"
          placeholder={t('form_phone')}
          onChange={handleContactFormChange}
        />
      </div>
      <div className="col-md-12">
        <textarea
          className={`${errorMessage !== '' && 'form-error'}`}
          rows={3}
          placeholder={t('form_message')}
          name="message"
          defaultValue={''}
          onChange={handleContactFormChange}
        />
        {errorMessage !== '' && (
          <h2 className="contact-form-error-message">
            {t('form_error_message')}
          </h2>
        )}
      </div>
      <button className="comment_submit" type="submit">
        {t('send_a_message')}
      </button>
    </form>
  );
};

export default ContactForm;
