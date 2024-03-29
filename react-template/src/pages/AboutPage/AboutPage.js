import React from 'react';

import './AboutPage.scss';

const AboutPage = () => {
  return (
    <div>
      <section id="about" className="about-section section">
        <div className="content">
          <header>
            <h1 className="about-title">ABOUT r.SIMON</h1>
          </header>
          <p className="about-text-header header">
            biography
          </p>
          <p className="about-text">
            Contemporary artist
          </p>
          <p className="about-text">
            Born in Iasi, Romania, 1997
          </p>
          <p className="about-text">
            Graduated from "George Enescu" Fine Arts University, 2019
          </p>
          <p className="about-text-header header">
            solo exhibitions
          </p>
          <p className="collection-year center">
            2021
          </p>
          <p className="collection-name">
            Simon’s People
          </p>
          <p className="collection-location">
            Galeria N.Tonitza, Iasi
          </p>
          <p className="about-text-header header">
            collective exhibitions
          </p>
          <div className="timeline-container">

            <div className="timeline-row">
              <div className="collection-year left">
                2021
              </div>
              <span className="vertical-top"></span>
              <div className="collection-list">
                <div className="right">
                  <p className="collection-name">Mecena Art Gallery</p>
                  <p className="collection-location">Bucuresti</p>
                </div>
                <span className="right"></span>
                <div className="right">
                  <p className="collection-name">Atelier 35</p>
                  <p className="collection-location">Galeria La Gard, Iasi</p>
                </div>
              </div>
            </div>

            <div className="timeline-row">
              <div className="collection-list">
                <div className="left">
                  <p className="collection-name">Abstract Expression</p>
                  <p className="collection-location">online</p>
                </div>
                <span className="left"></span>
              </div>
              <span className="vertical-middle"></span>
              <div className="collection-year right">
                2020
              </div>
            </div>

            <div className="timeline-row">
              <div className="collection-year left">
                2019
              </div>
              <span className="vertical-middle"></span>
              <div className="collection-list">
                <div className="right">
                  <p className="collection-name">Teritorii dedicate sufletului</p>
                  <p className="collection-location">Muzeul Unirii, Iasi</p>
                </div>
                <span className="right"></span>
                <div className="right">
                  <p className="collection-name">The future is now</p>
                  <p className="collection-location">Sala Pasilor Pierduti, Al.I.cuza University, Iasi</p>
                </div>
              </div>
            </div>

            <div className="timeline-row">
              <div className="collection-list">
                <div className="left">
                  <p className="collection-name">TramArt Studio</p>
                  <p className="collection-location">Iasi</p>
                </div>
                <span className="left"></span>
                <div className="left">
                  <p className="collection-name">Visiting Art History</p>
                  <p className="collection-location">Sala Pasilor Pierduti, Al.I.cuza University, Iasi</p>
                </div>
                <span className="left"></span>
                <div className="left">
                  <p className="collection-name">Urme ale sufletului</p>
                  <p className="collection-location">Muzeul Unirii, Iasi</p>
                </div>
                <span className="left"></span>
                <div className="left">
                  <p className="collection-name">Enneagram</p>
                  <p className="collection-location">Sala Pasilor Pierduti, Al.I.cuza University, Iasi</p>
                </div>
              </div>
              <span className="vertical-middle"></span>
              <div className="collection-year right">
                2018
              </div>
            </div>

            <div className="timeline-row">
              <div className="collection-year left">
                2017
              </div>
              <span className="vertical-bottom"></span>
              <div className="collection-list">
                <div className="right">
                  <p className="collection-name">Expresii</p>
                  <p className="collection-location">Galeria Tonitza, Iasi</p>
                </div>
                <span className="right"></span>
                <div className="right">
                  <p className="collection-name">Visiting Art History</p>
                  <p className="collection-location">Sala Pasilor Pierduti, Al.I.cuza University, Iasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default AboutPage;
