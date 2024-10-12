import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

const ContactFormArea = () => {
  return (
    <section className="contact_from_area contact_from_area2">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ContactForm />
          </div>
          <div className="col-md-6">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormArea;
