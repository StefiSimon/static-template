import React, { Component } from 'react';
import gmIconDesktop from './gmail 30.svg';
import igIconDesktop from './ig 30.svg';
import gmIconMobile from './gmail 24.svg';
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
    const emailHref = 'mailto:razvan.simon10@gmail.com?subject=Email from ' + name + '&body=' + message;
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
              <a href={instagramLink} target="_blank" rel="noopener noreferrer"><img src={igIconDesktop} alt="instagram" /></a>
              <a href={gmailLink}><img src={gmIconDesktop} alt="gmail" /></a>
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
