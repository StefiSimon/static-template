import React, { Component } from 'react';
import fbIconDesktop from './fb 30.svg';
import igIconDesktop from './ig 30.svg';
import fbIconMobile from './fb 24.svg';
import igIconMobile from './ig 24.svg';
import './ContactPage.css';

class ContactPage extends Component {
  state = {
    name: '',
    message: ''
  };
  onInputChange = (e) => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  render() {
    const { name, message } = this.state;
    const emailHref = 'mailto:abc@example.com?subject=Email from ' + name + '&body=' + message;
    const facebookLink = "https://facebook.com";
    const instagramLink = "https://instagram.com";
    return (
      <div>
        <section id="contact" className="contact-section section">
          <div className="content">
            <header>
              <h1 className="contact-title">CONTACT</h1>
            </header>
            <div className="contact-social-desktop">
              <a href={facebookLink} target="_blank" rel="noopener noreferrer"><img src={fbIconDesktop} alt="facebook" /></a>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer"><img src={igIconDesktop} alt="instagram" /></a>
            </div>
            <div className="contact-social-mobile">
              <a href={facebookLink} target="_blank" rel="noopener noreferrer"><img src={fbIconMobile} alt="facebook" /></a>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer"><img src={igIconMobile} alt="instagram" /></a>
            </div>
            <div className="contact-form">
              <div className="contact-group">
                <input name="name" type="text" placeholder="Name" onChange={(e) => this.onInputChange(e)} />
              </div>
              <div className="contact-group">
                <textarea name="message" type="text" placeholder="Your message" onChange={(e) => this.onInputChange(e)} />
              </div>
              <div className="contact-button">
                <button type="button">
                  <a href={emailHref}>
                    Send Email
                  </a>
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
