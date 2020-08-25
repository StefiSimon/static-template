import React, { Component } from 'react';
import gmIconDesktop from './mailDesktop.svg';
import igIconDesktop from './instagramDesktop.svg';
import gmIconMobile from './mailMobile.svg';
import igIconMobile from './instagramMobile.svg';
import './ContactPage.css';
import { motion } from 'framer-motion';

class ContactPage extends Component {
  state = {
    name: '',
    message: '',
    nameError: '',
    messageError: ''
  };
  onInputChange = (e) => {
    e.persist();
    const error = `${e.target.name}Error`;
    this.setState({
      [error]: '',
      [e.target.name]: e.target.value
    })
  };
  validateForm = () => {
    const { name, message } = this.state;
    if (name.length === 0) {
      this.setState({
        nameError: 'Please fill in your name before submitting'
      });
    }
    if (message.length === 0) {
      this.setState({
        messageError: 'Please write a message before submitting'
      });
    }
  }
  getMailLink = () => {
    const { name, message } = this.state;
    const emailHref = 'mailto:razvan.simon10@gmail.com?subject=Email from ' + name + '&body=' + message;
    const isSubmitDisabled = name.length === 0 || message.length === 0;
    return <a href={emailHref} disabled={isSubmitDisabled}>Send Email</a>;
  }
  render() {
    const { nameError, messageError } = this.state;
    const isSubmitDisabled = nameError.length > 0 || messageError.length > 0;
    const gmailLink = "mailto:razvan.simon10@gmail.com";
    const instagramLink = "https://www.instagram.com/r.simonn/";
    return (
      <div>
        <section id="contact" className="contact-section section">
          <div className="content">
            <header>
              <h1 className="contact-title">CONTACT</h1>
            </header>
            <div className="contact-social-mobile">
              <a href={instagramLink} target="_blank" rel="noopener noreferrer"><img src={igIconMobile} alt="instagram" /></a>
              <a href={gmailLink}><img src={gmIconMobile} alt="gmail" /></a>
            </div>
            <div className="contact-social-desktop">
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
              whileTap={{ scale: 0.9 }}href={gmailLink}><img src={gmIconDesktop} alt="mail" /></motion.a>
            </div>
            <div className="contact-form">
              <div className="contact-group">
                <input name="name" type="text" placeholder="Name" onChange={(e) => this.onInputChange(e)} />
                {nameError.length > 0 && <span className="form-error">{nameError}</span>}
              </div>
              <div className="contact-group">
                <textarea name="message" type="text" placeholder="Your message" onChange={(e) => this.onInputChange(e)} />
                {messageError.length > 0 && <span className="form-error textarea">{messageError}</span>}
              </div>
              <div className="contact-button">
                <button type="button" className="button" onClick={this.validateForm} disabled={isSubmitDisabled}>
                  {this.getMailLink()}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ContactPage;
