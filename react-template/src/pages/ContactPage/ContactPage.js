import React, { useState } from 'react';
import gmIconDesktop from './mailDesktop.svg';
import igIconDesktop from './instagramDesktop.svg';
import fbIconDesktop from './facebookDesktop.svg';
import { motion } from 'framer-motion';

import './ContactPage.scss';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');

  const onInputChange = (e) => {
    e.persist();
    const newValue = e.target.value;

    if (e.target.name === 'name') {
      setNameError('');
      setName(newValue);
    }
    if (e.target.name === 'message') {
      setMessageError('');
      setMessage(newValue);
    }
  };

  const validateForm = () => {
    if (name.length === 0) {
      setNameError('Please fill in your name before submitting');
    }
    if (message.length === 0) {
      setMessageError('Please write a message before submitting');
    }
  };

  const getMailLink = () => {
    const emailHref = 'mailto:razvan.simon10@gmail.com?subject=Email from ' + name + '&body=' + message;
    const isSubmitDisabled = name.length === 0 || message.length === 0;
    return <a href={emailHref} disabled={isSubmitDisabled}>Send Email</a>;
  };

  const isSubmitDisabled = nameError.length > 0 || messageError.length > 0;
  const gmailLink = "mailto:razvan.simon10@gmail.com";
  const instagramLink = "https://www.instagram.com/r.simonn/";
  const facebookLink = "https://www.facebook.com/r.simonn/";
  return (
    <div>
      <section id="contact" className="contact-section section">
        <div className="content">
          <header>
            <h1 className="contact-title">CONTACT</h1>
          </header>
          <div className="contact-social-mobile">
            <a href={facebookLink} target="_blank" rel="noopener noreferrer"><img src={fbIconDesktop} alt="facebook" /></a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer"><img src={igIconDesktop} alt="instagram" /></a>
            <a href={gmailLink}><img src={gmIconDesktop} alt="gmail" /></a>
          </div>
          <div className="contact-social-desktop">
            <motion.a whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
              style={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} href={facebookLink} target="_blank" rel="noopener noreferrer"><img src={fbIconDesktop} alt="facebook" /></motion.a>
            <motion.a whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
              style={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} href={instagramLink} target="_blank" rel="noopener noreferrer"><img src={igIconDesktop} alt="instagram" /></motion.a>
            <motion.a whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
              style={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} href={gmailLink}><img src={gmIconDesktop} alt="mail" /></motion.a>
          </div>
          <div className="contact-form">
            <div className="contact-group">
              <input name="name" type="text" placeholder="Name" onChange={(e) => onInputChange(e)} />
              {nameError.length > 0 && <span className="form-error">{nameError}</span>}
            </div>
            <div className="contact-group">
              <textarea name="message" type="text" placeholder="Your message" onChange={(e) => onInputChange(e)} />
              {messageError.length > 0 && <span className="form-error textarea">{messageError}</span>}
            </div>
            <div className="contact-button">
              <button type="button" className="button" onClick={validateForm} disabled={isSubmitDisabled}>
                {getMailLink()}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default ContactPage;
