import React from 'react';

import carouselPaintings from '../../ArtworksPage/tataracesPaintingList';
import GalleryPage from '../GalleryPage';

const TataracesPage = () => {
  const sectionStyle = {
    color: '#dddddd'
  };

  const pictureNameStyle = {
    color: '#dddddd'
  };

  const pictureDetailStyle = {
    color: '#dddddd'
  };

  return (
    <GalleryPage
      year="2021"
      title="Tataraces"
      description="9 artworks. Tataraces are abstract representations of places in my neighborhood. It’s about the existence of an appereance and an essence, about what is seen and what is not seen, things that often become identical. The connections are created on the principle of forming memories, suggesting a familiar atmosphere. The maine themes are nature, birth and death seen as a concept through the causal relationship of the lines. The project is a tour with me as a guide, which has as a reference a principle of hermeticism: Correspondence (As above, so below; As below, so above)."
      pictures={carouselPaintings}
      sectionClassName="tataraces"
      titleClassName="tataraces"
      sectionStyle={sectionStyle}
      pictureNameStyle={pictureNameStyle}
      pictureDetailStyle={pictureDetailStyle}
    />
  );
};

export default TataracesPage;