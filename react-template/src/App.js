import React, { useState } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import HomePage from './pages/HomePage/HomePage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import { getURL } from './utils/url';

function App() {
  const url = getURL();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onMenuItemSelect = () => {
    setIsMenuOpen(false);
  };
  return (
    <div>
      <BrowserRouter>
        <header className="header-mobile">
          <Menu isOpen={isMenuOpen} onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}>
            <a className="menu-item" href="/" onClick={onMenuItemSelect}>home</a>
            <a className="menu-item" href="/#about" onClick={onMenuItemSelect}>about</a>
            <a className="menu-item" href="/#collections" onClick={onMenuItemSelect}>collections</a>
            <a className="menu-item" href="/#artworks" onClick={onMenuItemSelect}>artworks</a>
            <a className="menu-item" href="/#contact" onClick={onMenuItemSelect}>contact</a>
          </Menu>
        </header>
        
        <header className="header-desktop">
          <nav>
            <ul>
              <li><a href={`${url}/#landing`}>home</a></li>
              <li><a href={`${url}/#about`}>about</a></li>
              <li><a href={`${url}/#collections`}>collections</a></li>
              <li><a href={`${url}/#artworks`}>artworks</a></li>
              <li><a href={`${url}/#contact`}>contact</a></li>
            </ul>
          </nav>
        </header>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/gallery" component={GalleryPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
