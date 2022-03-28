import React, { Fragment, useState, useEffect } from 'react';
import cn from 'classnames';
import fullScreenIcon from './full-screen.png';
import ProgressiveImage from 'react-progressive-image';
import Modal from '../../components/Modal/Modal';
import Loader from '../../components/Loader/Loader';

import './GalleryPage.scss';

const GalleryPage = ({ year, title, description, pictures, sectionStyle, sectionClassName, titleClassName, pictureNameStyle, pictureDetailStyle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImgSrc, setCurrentImgSrc] = useState('');

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImgSrc('');
  };

  const openModal = (e) => {
    const index = e.target.name;
    const currentImageObj = pictures[index];
    setIsModalOpen(true);
    setCurrentImgSrc(currentImageObj.bigPicture);
  };

  const onEsc = (e) => {
    if (e.which === 27) {
      closeModal();
    }
  };

  const renderPictures = (pictures) => {
    return pictures.map((picture, index) => {
      const isOdd = index % 2 === 1;
      const pictureDetailsStyles = (loading) => {
        return {
          order: isOdd ? 1 : 2,
          display: loading ? 'none' : 'block',
          textAlign: isOdd ? 'right' : 'left'
        };
      };
      const pictureImageStyles = {
        order: index % 2 ? 2 : 1,
        margin: picture.isLargeImage ? (isOdd ? '0 0 0 5%' : '0 5% 0 0') : '0'
      };
      const imgTagStyles = (loading) => {
        return {
          filter: loading ? 'blur(8px)' : 'blur(0px)', 
          opacity: loading ? 0.5 : 1 
        };
      };
      return (
        <ProgressiveImage delay={1000} src={picture.picture} key={index}>
          {(src, loading) => (
            <div className="gallery-picture">
              <div 
                className="picture-info" 
                style={pictureDetailsStyles(loading)}
              >
                <p className="picture-name" style={pictureNameStyle}>{picture.name}</p>
                <p className="picture-details" style={pictureDetailStyle}>{picture.dimensions}</p>
                <p className="picture-details" style={pictureDetailStyle}>{picture.technique}</p>
              </div>
              <div className="picture-image" style={pictureImageStyles} onClick={openModal}>
                <img src={fullScreenIcon} alt="fullscreen" className="picture-icon" name={index} />
                <img style={imgTagStyles(loading)} src={src} alt={picture.name} name={index} />
              </div>
              <Modal
                show={isModalOpen}
                handleClose={closeModal}
                onKeyUp={onEsc}
              >
                <div className="modal-picture">
                  <ProgressiveImage delay={1000} src={currentImgSrc}>
                    {(src, loading) => (
                      <Fragment>
                        {loading && isModalOpen ? <Loader /> : <img src={src} alt="gallery painting" tabIndex="1" onBlur={closeModal} />}
                      </Fragment>
                    )}
                  </ProgressiveImage>
                </div>
              </Modal>
            </div>
            )
          }
        </ProgressiveImage>
      )
    });
  };

  return (
    <div>
      <section id="gallery" className={cn("gallery-section section", sectionClassName)} style={sectionStyle}>
        <header>
          <h1 className={cn("gallery-title", titleClassName)}>
            <span>{year}</span>
            {title.toUpperCase()}
          </h1>
        </header>
        <div className="gallery-container">
          <div className="gallery-description">
            {description}
          </div>
          <div className="gallery-pictures-container">
            {renderPictures(pictures)}
          </div>
        </div>
      </section>
    </div>
  )
};

export default GalleryPage;
