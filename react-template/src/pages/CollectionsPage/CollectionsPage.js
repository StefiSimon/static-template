import React, { Component } from 'react';
import './CollectionsPage.css';
import carouselPaintings from './paintingList';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

class CollectionsPage extends Component {
  render() { 
    return (
      <div>
        <section id="collections" className="collections-section section">
          <header>
            <h1 className="collections-title">COLLECTIONS</h1>
          </header>
          <div className="collection-container">
            <div className="collection-info">
              <p className="collection-year">2019</p>
              <p className="collection-title">Causality</p>
              <p className="collection-desc">
                12 artworks.
                <br></br>
                The project suggests the connection between action and consequence/ cause and effect, 
                especially in the process of creation, considering that the past acts on the future and vice versa. 
                It represents an attitude on life, a way of perceiving it. 
                Huge influences were the representatives of gestualism and the black is a sum of the other colors. 
                The works are put to maximum value in direct light, because the colors under the black come to surface.
              </p>
              <div className="explore-button">
                <button type="button" className="button">
                  <Link to='/gallery'>Explore gallery</Link>
                </button>
              </div>
            </div>
            <div className="collection-carousel">
              <Carousel useKeyboardArrows>
                {carouselPaintings.map(painting => (
                  <div className="collection-painting-container" key={painting.name}>
                    <img alt={painting.name} src={painting.picture} className="collection-painting" />
                    <p className="legend">{painting.name}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default CollectionsPage;