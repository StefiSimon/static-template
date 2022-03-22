import React from 'react';

import carouselPaintings from '../../ArtworksPage/motamotPaintingList';
import GalleryPage from '../GalleryPage';

const MotAMotPage = () => {
    const sectionStyle = {
        color: '#8a8a8a'
    };

    const pictureNameStyle = {
        color: '#8a8a8a'
    };

    const pictureDetailStyle = {
        color: '#8a8a8a'
    };

    return (
        <GalleryPage
            year="2020"
            title="Mot-A-Mot"
            description="11 + 1 artworks.
            White. Absence. Void. Link by link. Initiation. Rebirth. Revelation. Progress. Wisdom. Purity. ’Harmony of silence’(Kandinsky)."
            pictures={carouselPaintings}
            sectionClassName="motamot"
            titleClassName="motamot"
            sectionStyle={sectionStyle}
            pictureNameStyle={pictureNameStyle}
            pictureDetailStyle={pictureDetailStyle}
        />
    );
};

export default MotAMotPage;