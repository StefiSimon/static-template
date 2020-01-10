import React, { Component } from 'react';
import './CollectionsPage.css';
import painting1 from '../../paintings/1.jpg';
import painting2 from '../../paintings/2.jpg';
import painting3 from '../../paintings/3.jpg';
import painting4 from '../../paintings/4.jpg';
import painting5 from '../../paintings/5.jpg';
import painting6 from '../../paintings/6.jpg';
import painting7 from '../../paintings/7.jpg';
import painting8 from '../../paintings/8.jpg';
import painting9 from '../../paintings/9.jpg';
import painting10 from '../../paintings/10.jpg';
import painting11 from '../../paintings/11.jpg';
import painting12 from '../../paintings/12.jpg';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

export const carouselPaintings = [
  {
    name: 'Stars',
    picture: painting1
  },
  {
    name: 'Reason is nothing',
    picture: painting2
  },
  {
    name: 'Fairplay',
    picture: painting3
  },
  {
    name: 'Fruit of the poisonous tree',
    picture: painting4
  },
  {
    name: 'Bar',
    picture: painting5
  },
  {
    name: 'Links',
    picture: painting6
  },
  {
    name: 'R.S.',
    picture: painting7
  },
  {
    name: 'Loyalty',
    picture: painting8
  },
  {
    name: 'Last night',
    picture: painting9
  },
  {
    name: 'Law of attraction',
    picture: painting10
  },
  {
    name: 'Boardwalk',
    picture: painting11
  },
  {
    name: 'Every decision you make affects every facet of every other fuc*ing thing. (Tony Soprano)',
    picture: painting12
  }
];

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
              <p className="collection-name">Causality</p>
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
              <Carousel>
                {carouselPaintings.map(painting => (
                  <div className="collection-painting-container">
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