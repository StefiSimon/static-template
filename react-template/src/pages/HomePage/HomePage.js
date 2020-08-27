import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import AboutPage from '../AboutPage/AboutPage';
import CollectionsPage from '../ArtworksPage/ArtworksPage';
import ContactPage from '../ContactPage/ContactPage';

import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-wrapper">
      <LandingPage />
      <AboutPage />
      <CollectionsPage />
      <ContactPage />
    </div>
  )
};

export default HomePage;
