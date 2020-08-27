import React from 'react';

import carouselPaintings from '../../ArtworksPage/causalityPaintingList';
import GalleryPage from '../GalleryPage';

const CausalityPage = () => {
  const sectionStyle = {
    color: '#3F3838'
  };

  const pictureNameStyle = {
    color: '#3F3838'
  };

  const pictureDetailStyle = {
    color: '#3F3838'
  };

  return (
    <GalleryPage 
      year="2019"
      title="Causality"
      description="12 artworks. The project suggests the connection between action and consequence/ cause and effect, especially in the process of creation, considering that the past acts on the future and vice versa. It represents an attitude on life, a way of perceiving it. Huge influences were the representatives of gestualism and the black is a sum of the other colors. The works are put to maximum value in direct light, because the colors under the black come to surface."
      pictures={carouselPaintings}
      sectionClassName="causality"
      titleClassName="causality"
      sectionStyle={sectionStyle}
      pictureNameStyle={pictureNameStyle}
      pictureDetailStyle={pictureDetailStyle}
    />
  );
};

export default CausalityPage;
