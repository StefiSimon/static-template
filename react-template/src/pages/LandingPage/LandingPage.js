import React, { Component } from 'react';
import Logo from '../../components/Logo';
import scrollIcon from './arrow-down.png';
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <section id="landing" className="landing-section section">
          <div className="content">
            <header>
              <h1 className="landing-title">r.SIMON</h1>
            </header>
            <div className="landing-logo">
              <Logo />
            </div>
            <div className="scroll-icon">
              <a href="#about">
                <img src={scrollIcon} alt="scroll" />
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default LandingPage;
