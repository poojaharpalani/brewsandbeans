import BackButton from '../common/BackButton';
import './Contact.css';

export default function Contact() {
  return (
    <>
    <BackButton/>
      <section className="contact">
        <h2 className="contact-title">Contact Us</h2>

        <div className="contact-info">
          <p>
            <strong>Address:</strong><br />
            Brew & Bean Cafe,<br />
            MG Road, Bengaluru
          </p>

          <p>
            <strong>Phone:</strong><br />
            <a href="tel:+911234567890">+91 12345 67890</a>
          </p>

          <p>
            <strong>Opening Hours:</strong><br />
            Mon – Sun: 8:00 AM – 10:00 PM
          </p>
        </div>

        <div className="map-container">
          <iframe
            title="Cafe Location"
            src="https://www.google.com/maps?q=MG%20Road%20Bangalore&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </section>

   
    </>
  );
}
