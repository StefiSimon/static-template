import React from 'react';
import causalityPaintings from './causalityPaintingList';
import motamotPaintings from './motamotPaintingList';
import CollectionContainer from './CollectionContainer/CollectionContainer';

import './ArtworksPage.css';

const ArtworksPage = () => {
  return (
    <div>
      <section id="collections" className="collections-section section">
        <header>
          <h1 className="collections-title">ART WORKS</h1>
        </header>
        <CollectionContainer
          year="2020"
          title="Mot-A-Mot"
          description={(
            <>
              11 + 1 artworks.
              <br></br>
              White. Absence. Void. Link by link. Initiation. Rebirth. Revelation. Progress. Wisdom. Purity. 
              ’Harmony of silence’(Kandinsky).
            </>
          )}
          carouselPaintings={motamotPaintings}
        />
        <CollectionContainer 
          year="2019" 
          title="Causality" 
          description={(
            <>
              12 artworks.
              <br></br>
              The project suggests the connection between action and consequence/ cause and effect, 
              especially in the process of creation, considering that the past acts on the future and vice versa. 
              It represents an attitude on life, a way of perceiving it. 
              Huge influences were the representatives of gestualism and the black is a sum of the other colors. 
              The works are put to maximum value in direct light, because the colors under the black come to surface.
            </>
          )}
          carouselPaintings={causalityPaintings} 
        />
      </section>
    </div>
  )
};

export default ArtworksPage;