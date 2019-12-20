import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import AboutPage from '../AboutPage/AboutPage';
import CollectionsPage from '../CollectionsPage/CollectionsPage';
import ArtworksPage from '../ArtworksPage/ArtworksPage';
import ContactPage from '../ContactPage/ContactPage';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <LandingPage />
        <AboutPage />
        <CollectionsPage />
        <ArtworksPage />
        <ContactPage />
      </div>
    )
  }
}

export default HomePage;
