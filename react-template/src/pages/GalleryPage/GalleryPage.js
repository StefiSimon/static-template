import React, { Component } from 'react';
import { carouselPaintings } from '../CollectionsPage/CollectionsPage';
import fullScreenIcon from './full-screen.png';
import './GalleryPage.css';
import ProgressiveImage from 'react-progressive-image';

class GalleryPage extends Component {
  state = {
    isHover: ''
  };
  renderPictures = () => {
    return carouselPaintings.map((picture, index) => (
      <ProgressiveImage delay={1000} src={picture.picture}>
        {(src, loading) => (
          <div className="gallery-picture">
            <div className="picture-info" style={{ order: index % 2 ? 1 : 2, display: loading ? 'none' : 'block' }}>
              {picture.name}
            </div>
            <div className="picture-image" style={{ order: index % 2 ? 2 : 1 }}>
              <img src={fullScreenIcon} alt="fullscreen" className="picture-icon" />
              <div className="picture-overlay" />
              <img style={{ filter: loading ? 'blur(8px)' : 'blur(0px)', opacity: loading ? 0.5 : 1 }} src={src} alt={picture.name} />
            </div>
          </div>
          )
        }
      </ProgressiveImage>
    ));
  }
  render() {
    return (
      <div>
        <section id="gallery" className="gallery-section section">
          <header>
            <h1 className="gallery-title">
              <span>2019</span>
              CAUSALITY
            </h1>
          </header>
          <div className="gallery-container">
            <div className="gallery-description">
              12 artworks.
              The project suggests the connection between action and consequence/ cause and effect, 
              especially in the process of creation, considering that the past acts on the future and vice versa. 
              It represents an attitude on life, a way of perceiving it. 
              Huge influences were the representatives of gestualism and the black is a sum of the other colors. 
              The works are put to maximum value in direct light, because the colors under the black come to surface.
            </div>
            <div className="gallery-pictures-container">
              {this.renderPictures()}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default GalleryPage;
