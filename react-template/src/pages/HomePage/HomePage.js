import React, { Component, Fragment } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import AboutPage from '../AboutPage/AboutPage';
import CollectionsPage from '../CollectionsPage/CollectionsPage';
import ArtworksPage from '../ArtworksPage/ArtworksPage';
import ContactPage from '../ContactPage/ContactPage';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <LandingPage />
        <AboutPage />
        <CollectionsPage />
        <ArtworksPage />
        <ContactPage />
      </Fragment>
    )
  }
}

export default HomePage;
