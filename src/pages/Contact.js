import React, { useState } from 'react';
import '../styles/contact.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
    <section className="header-continuity">
          <h2>Contact</h2>
          <h3 className="subtitle">Une question ? Un projet ? Parlons-en !</h3>
      </section>
    <section id="contact" className="contact-section">
      <h2>Entrons en contact</h2>
      {submitted ? (
        <p>Merci pour votre message ! Je vous répondrai bientôt.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Nom:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Sujet:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Envoyer</button>
        </form>
      )}
    </section>
    </>
  );
};

export default ContactForm;
