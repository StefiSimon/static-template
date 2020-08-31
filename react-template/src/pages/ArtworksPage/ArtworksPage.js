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
          galleryUrl={'/motamot'}
          description={(
            <>
              11 + 1 artworks.
              <br></br>
              White. Absence. Void. Link by link. Initiation. Rebirth. [...]
            </>
          )}
          carouselPaintings={motamotPaintings}
        />
        <CollectionContainer 
          year="2019" 
          title="Causality" 
          galleryUrl={'/causality'}
          description={(
            <>
              12 artworks.
              <br></br>
              The project suggests the connection between action and consequence/ cause and effect, [...]
            </>
          )}
          carouselPaintings={causalityPaintings} 
        />
      </section>
    </div>
  )
};

export default ArtworksPage;