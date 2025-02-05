import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../../data/portfolioData';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: portfolioData.contact.social.facebook },
    { icon: 'fab fa-instagram', url: portfolioData.contact.social.instagram },
    { icon: 'fab fa-linkedin-in', url: portfolioData.contact.social.linkedin },
    { icon: 'fab fa-github', url: portfolioData.contact.social.github }
  ];

  useEffect(() => {
    // Initialiser EmailJS avec votre clé publique
    emailjs.init('36zmkaZTaI1Z4FGCI');
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    // Liste des domaines d'email autorisés
    const allowedDomains = [
      'gmail.com',
      'yahoo.com',
      'outlook.fr',
      'live.com',
      'aol.com',
      'icloud.com',
      'etna-alternance.net',
      'protonmail.com',
      'gmail.fr',
      'yahoo.fr',
      'hotmail.fr',
      'live.fr',
      'icloud.com',
      'me.com',
      'mac.com'
    ];

    const domain = email.split('@')[1];
    return allowedDomains.includes(domain);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // Vérification de l'email
    if (!validateEmail(formData.email)) {
      setStatus({
        submitting: false,
        success: false,
        error: "Cet email n'est pas pris en charge. Veuillez utiliser une adresse email valide (Gmail, Yahoo, Hotmail, Outlook, etc.)"
      });
      return;
    }

    try {
      await emailjs.send(
        'service_tz1lbzj',
        'template_qryey7s',
        {
          from_name: formData.name,
          from_email: 'peron.h92@outlook.fr',
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Hugo Peron',
        },
        '36zmkaZTaI1Z4FGCI'
      );

      setStatus({
        submitting: false,
        success: true,
        error: null
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Error:', error);
      let errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
      
      // Messages d'erreur plus spécifiques
      if (error.status === 412) {
        errorMessage = "Il y a eu un problème avec l'envoi du message. Veuillez vérifier votre adresse email.";
      }

      setStatus({
        submitting: false,
        success: false,
        error: errorMessage
      });
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="section-title">
          <span className="highlight">Contact</span>
        </h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Informations de Contact</h3>
              <div className="info-item">
                <i className="fa fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${portfolioData.contact.email}`}>
                    {portfolioData.contact.email}
                  </a>
                </div>
              </div>
              <div className="info-item">
                <i className="fa fa-mobile-alt"></i>
                <div>
                  <h4>Téléphone</h4>
                  <a href={`tel:${portfolioData.contact.phone}`}>
                    {portfolioData.contact.phone}
                  </a>
                </div>
              </div>

              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              {status.success && (
                <div className="success-message">
                  Message envoyé avec succès !
                </div>
              )}
              {status.error && (
                <div className="error-message">
                  {status.error}
                </div>
              )}
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status.submitting}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status.submitting}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Sujet"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={status.submitting}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  disabled={status.submitting}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="submit-button"
                disabled={status.submitting}
              >
                {status.submitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 