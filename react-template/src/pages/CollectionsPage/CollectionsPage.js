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
import bigPainting1 from '../../paintings/one.jpg';
import bigPainting2 from '../../paintings/two.jpg';
import bigPainting3 from '../../paintings/three.jpg';
import bigPainting4 from '../../paintings/four.jpg';
import bigPainting5 from '../../paintings/five.jpg';
import bigPainting6 from '../../paintings/six.jpg';
import bigPainting7 from '../../paintings/seven.jpg';
import bigPainting8 from '../../paintings/eight.jpg';
import bigPainting9 from '../../paintings/nine.jpg';
import bigPainting10 from '../../paintings/ten.jpg';
import bigPainting11 from '../../paintings/eleven.jpg';
import bigPainting12 from '../../paintings/twelve.jpg';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

export const carouselPaintings = [
  {
    name: 'R.S.',
    picture: painting7,
    bigPicture: bigPainting7,
    dimensions: '30 x 40 cm',
  },
  {
    name: 'Bar',
    picture: painting5,
    bigPicture: bigPainting5,
    dimensions: '40 x 50 cm',
    isLargeImage: true
  },
  {
    name: 'Loyalty',
    picture: painting8,
    bigPicture: bigPainting8,
    dimensions: '60 x 80 cm',
  },
  {
    name: 'Stars',
    picture: painting1,
    bigPicture: bigPainting1,
    dimensions: '100 x 120 cm',
    isLargeImage: true
  },
  {
    name: 'Fairplay',
    picture: painting3,
    bigPicture: bigPainting3,
    dimensions: '80 x 120 cm',
    isLargeImage: true
  },
  {
    name: 'Law of attraction',
    picture: painting10,
    bigPicture: bigPainting10,
    dimensions: '50 x 70 cm',
  },
  {
    name: 'Boardwalk',
    picture: painting11,
    bigPicture: bigPainting11,
    dimensions: '60 x 80 cm',
  },
  {
    name: 'Links',
    picture: painting6,
    bigPicture: bigPainting6,
    dimensions: '50 x 70 cm',
  },
  {
    name: 'Reason is nothing',
    picture: painting2,
    bigPicture: bigPainting2,
    dimensions: '80 x 100 cm',
  },
  {
    name: 'Fruit of the poisonous tree',
    picture: painting4,
    bigPicture: bigPainting4,
    dimensions: '50 x 70 cm',
  },
  {
    name: 'Last night',
    picture: painting9,
    bigPicture: bigPainting9,
    dimensions: '60 x 80 cm',
  },
  {
    name: 'Every decision you make affects every facet of every other fuc*ing thing. (Tony Soprano)',
    picture: painting12,
    bigPicture: bigPainting12,
    dimensions: '50 x 70 cm',
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