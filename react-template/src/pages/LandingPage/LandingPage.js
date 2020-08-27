import React from 'react';
import Logo from '../../components/Logo';
import scrollIcon from './arrow-down.png';
import { motion } from 'framer-motion';

import './LandingPage.css';

const LandingPage = () => {
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
              <motion.img src={scrollIcon} alt="scroll" whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}/>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage;
