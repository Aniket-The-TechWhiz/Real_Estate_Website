import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="page-title">Contact Us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you. Here's how you can reach us.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Address</h4>
                  <p>123 Estate Avenue, Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+91 1234567890</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>info@estateelite.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Saturday: 9AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <ContactForm isFullPage={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;